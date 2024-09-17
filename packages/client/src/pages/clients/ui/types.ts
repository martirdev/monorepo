export type Client = {
  createdAt: Date;
  id: string;
  name: string;
  orders: number;
};

export type ClientsFilterForm = {
  name: string;
};
