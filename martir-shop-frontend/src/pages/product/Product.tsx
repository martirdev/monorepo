import {FC, memo} from 'react';

import {ViewedProducts} from '_entities/viewed-products';
import {PriceTag} from '_features/price-tag';
import {Accordeon} from '_shared/accordeon';
import {Container} from '_shared/container';
import Slider from '_shared/slider/Slider';

import {CONTENT_FOR_PRODUCT_PAGE} from './consts';

const Product = memo<FC>(function Product() {
  return (
    <Container py={6}>
      {/* DESKTOP PRICE TAG */}
      <Container px={3} className="absolute right-0 h-full pt-20">
        <div className="sticky top-8 z-10 hidden max-w-sm lg:block">
          <PriceTag product={CONTENT_FOR_PRODUCT_PAGE.product_info} />
        </div>
      </Container>
      <div className="pb-10">
        <Slider images={CONTENT_FOR_PRODUCT_PAGE.product_photos} duration={3000} className="h-[500px]" />
      </div>
      <Container px={3} className="flex w-full flex-col gap-16">
        {/* MOBILE PRICE TAG */}
        <div className="z-10 -mt-24 flex justify-center lg:hidden">
          <div className="max-w-sm">
            <PriceTag product={CONTENT_FOR_PRODUCT_PAGE.product_info} />
          </div>
        </div>
        <div className="flex w-full flex-col gap-10 text-paragraph lg:pr-[25rem]">
          <div>{CONTENT_FOR_PRODUCT_PAGE.product_description}</div>
          <div className="flex flex-col gap-6">
            <Accordeon title={CONTENT_FOR_PRODUCT_PAGE.product_features.name}>
              {CONTENT_FOR_PRODUCT_PAGE.product_features.info}
            </Accordeon>
            {CONTENT_FOR_PRODUCT_PAGE.service.map(item => (
              <Accordeon title={item.name} key={item.name}>
                {item.info}
              </Accordeon>
            ))}
          </div>
          <ViewedProducts products={CONTENT_FOR_PRODUCT_PAGE.viewed_products} />
        </div>
      </Container>
    </Container>
  );
});

export default Product;
