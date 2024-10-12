export type Client = {
  contact: string;
  createdAt: Date;
  id: string;
  name: string;
  orders: number;
};

export type ClientsFilterForm = {
  name: string;
};
