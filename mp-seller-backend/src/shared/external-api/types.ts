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
