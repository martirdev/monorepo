export type LoadPlacesFromYMRequest = {
  campaigns: {
    domain: string;
    id: number;
    clientId: string;
    business: {
      id: string;
      name: string;
    };
  }[];
};

export type LoadCategorySettings = {
  result: {
    categoryId: number;
    parameters: {
      id: number;
      name: string;
      type: "TEXT" | "ENUM" | "BOOLEAN" | "NUMERIC";
      description: string;
      recommendationTypes: string[];
      required: boolean;
      filtering: boolean;
      distinctive: boolean;
      multivalue: boolean;
      allowCustomValues: boolean;
      values?: {
        id: number;
        value: string;
      }[];
      constraints?: {
        minValue?: number;
        maxValue?: number;
        maxLength?: number;
      };
      valueRestrictions: {
        limitingParameterId: number;
        limitedValues: {
          limitingOptionValueId: number;
          optionValueIds: number[];
        }[];
      }[];
    }[];
  };
};
