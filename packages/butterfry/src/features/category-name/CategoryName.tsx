import { useCategories } from "@/shared/api/categories";

type CategoryNameProps = {
  id?: string | null;
};

export function CategoryName({ id }: CategoryNameProps) {
  const { data } = useCategories();
  const categoryMap =
    data?.categories.reduce<Record<string, string>>((acc, category) => {
      acc[category.id] = category.name;
      return acc;
    }, {}) ?? {};

  if (!id) return null;

  return categoryMap[id] || id;
}
