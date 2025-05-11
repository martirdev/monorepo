import { db } from "@/lib/db";
import {
  images,
  productPackages,
  productParams,
  productParamValues,
  products,
  productVariantToImages,
  productVariants,
  productVariantsToProductParamValues,
} from "@/scheme";
import { zValidator } from "@hono/zod-validator";
import { eq, ilike, inArray, and, isNotNull, desc } from "drizzle-orm";
import { Hono } from "hono";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import {
  createProductScheme,
  deleteProductScheme,
  getProductsVariants,
  updateProductVariantScheme,
} from "./utils";
import {
  UpdateImageAddedItemScheme,
  UpdateImageDeletedItemScheme,
} from "./types";

export const productsRouter = new Hono()
  .post(
    "/",
    zValidator("json", z.object({ offset: z.number().positive().optional() })),
    async (c) => {
      const { offset = 0 } = c.req.valid("json");

      const productsResponse = await db.query.products.findMany({
        limit: 20,
        offset: offset,
        orderBy: desc(products.createdAt),
        with: {
          productVariants: {
            orderBy: productVariants.id,
            with: {
              lastPrice: true,
              stock: true,
              category: true,
              images: {
                columns: {},
                with: {
                  image: true,
                },
              },
              package: true,
              params: {
                columns: {},
                with: {
                  paramValue: {
                    with: {
                      param: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      return c.json({ products: productsResponse });
    }
  )
  .post("/create", zValidator("json", createProductScheme), async (c) => {
    const data = c.req.valid("json");

    await db.transaction(async (tx) => {
      const productId = uuidv4();

      const paramsWithIds = data.params.map((param) => ({
        id: uuidv4(),
        name: param.name,
        values: param.values.map((value) => ({
          id: uuidv4(),
          value,
        })),
      }));
      const paramsCombinations = paramsWithIds.reduce<
        Array<
          {
            name: string;
            value: string;
            paramId: string;
            valueId: string;
          }[]
        >
      >(
        (acc, param) =>
          acc.flatMap((combination) => {
            return param.values.map((value) => {
              const newCombination = [...combination];
              newCombination.push({
                name: param.name,
                paramId: param.id,
                value: value.value,
                valueId: value.id,
              });
              return newCombination;
            });
          }),
        [[]]
      );
      const imagesData = data.images.map(({ url }) => ({
        id: uuidv4(),
        url,
      }));
      const rawProductVariants = paramsCombinations.map((params) => {
        const id = uuidv4();
        const packageId = uuidv4();

        return {
          id,
          name: data.name,
          category: data.category || null,
          description: data.description || null,
          images: imagesData,
          package: { ...data.package, id: packageId, productVariantId: id },
          meta: data.meta || null,
          params,
        };
      });

      await Promise.all([
        tx.insert(products).values({
          id: productId,
          name: data.name,
        }),
        tx.insert(productVariants).values(
          rawProductVariants.map((variant) => ({
            id: variant.id,
            name: variant.name,
            description: variant.description,
            meta: variant.meta,
            productId,
            packageId: variant.package.id,
            categoryId: data.category,
          }))
        ),
        imagesData.length &&
          tx.insert(images).values(
            imagesData.map((image) => ({
              id: image.id,
              url: image.url,
            }))
          ),
        tx.insert(productPackages).values(
          rawProductVariants.map((variant) => ({
            width: variant.package.width,
            height: variant.package.height,
            length: variant.package.length,
            weight: variant.package.weight,
            productVariantId: variant.id,
          }))
        ),
        tx.insert(productParams).values(
          paramsWithIds.map(({ id, name }) => ({
            id,
            name,
          }))
        ),
        tx.insert(productParamValues).values(
          paramsWithIds.flatMap((param) =>
            param.values.map(({ value, id }) => ({
              id,
              value,
              paramId: param.id,
            }))
          )
        ),
        imagesData.length &&
          tx.insert(productVariantToImages).values(
            rawProductVariants.flatMap((variant) =>
              variant.images.map((image) => ({
                imageId: image.id,
                productVariantId: variant.id,
              }))
            )
          ),
        tx.insert(productVariantsToProductParamValues).values(
          rawProductVariants.flatMap((variant) =>
            variant.params.map((param) => ({
              productParamValueId: param.valueId,
              productVariantId: variant.id,
            }))
          )
        ),
      ]);
    });

    return c.json({ message: "Ok" });
  })
  .delete("/delete", zValidator("json", deleteProductScheme), async (c) => {
    await db.transaction(async (tx) => {
      const data = c.req.valid("json");

      const product = await tx.query.products.findFirst({
        where: eq(products.id, data.id),
        with: {
          productVariants: {
            columns: {
              id: true,
            },
          },
        },
      });

      const productId = product?.id;
      const variantsIds = product?.productVariants.map((item) => item.id);

      variantsIds &&
        (await tx
          .delete(productVariantsToProductParamValues)
          .where(
            inArray(
              productVariantsToProductParamValues.productVariantId,
              variantsIds
            )
          ));

      await Promise.all([
        productId && tx.delete(products).where(eq(products.id, productId)),
        variantsIds &&
          tx
            .delete(productVariants)
            .where(inArray(productVariants.id, variantsIds)),
        variantsIds &&
          tx
            .delete(productPackages)
            .where(inArray(productPackages.productVariantId, variantsIds)),
        variantsIds &&
          tx
            .delete(productVariantToImages)
            .where(
              inArray(productVariantToImages.productVariantId, variantsIds)
            ),
      ]);
    });

    return c.json({ message: "Ok" });
  })
  .post("/variants", zValidator("json", getProductsVariants), async (c) => {
    const data = c.req.valid("json");

    const variants = await db.query.productVariants.findMany({
      orderBy: productVariants.createdAt,
      where: ilike(productVariants.name, `%${data.search}%`),
      with: {
        stock: true,
        params: {
          with: {
            paramValue: {
              with: {
                param: true,
              },
            },
          },
        },
      },
    });

    return c.json({ variants });
  })
  .post(
    "/variants/update",
    zValidator("json", updateProductVariantScheme),
    async (c) => {
      const data = c.req.valid("json");

      await db.transaction(async (tx) => {
        const { addedImages, removedImages } = data.images.reduce<{
          addedImages: (UpdateImageAddedItemScheme & { id: string })[];
          removedImages: UpdateImageDeletedItemScheme[];
        }>(
          (acc, img) => {
            if (img.type === "added") {
              acc.addedImages.push({ ...img, id: uuidv4() });
            } else if (img.type === "deleted") {
              acc.removedImages.push(img);
            }

            return acc;
          },
          {
            addedImages: [],
            removedImages: [],
          }
        );

        await Promise.all([
          tx
            .update(productVariants)
            .set({
              name: data.name,
              description: data.description || null,
              meta: data.meta || null,
              categoryId: data.category || null,
            })
            .where(eq(productVariants.id, data.id)),
          tx
            .update(productPackages)
            .set({
              id: data.id,
              width: data.package.width || null,
              length: data.package.length || null,
              height: data.package.height || null,
              weight: data.package.weight || null,
            })
            .where(eq(productPackages.productVariantId, data.id)),
          addedImages.length &&
            tx.insert(images).values(
              addedImages.map((image) => ({
                id: image.id,
                url: image.url,
              }))
            ),
          addedImages.length &&
            tx.insert(productVariantToImages).values(
              addedImages.map((image) => ({
                imageId: image.id,
                productVariantId: data.id,
              }))
            ),
          removedImages.length &&
            tx.delete(productVariantToImages).where(
              inArray(
                productVariantToImages.imageId,
                removedImages.map((item) => item.id)
              )
            ),
        ]);
      });

      return c.json({ message: "Ok" });
    }
  );
