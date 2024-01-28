export type LoadCategorySettings = {
  result: {
    id: number;
    attribute_complex_id: number;
    name: string;
    description: string;
    type: "String" | "ImageURL";
    is_collection: boolean;
    is_required: boolean;
    is_aspect: boolean;
    max_value_count: number;
    group_name: string;
    group_id: number;
    dictionary_id: number;
  }[];
};
