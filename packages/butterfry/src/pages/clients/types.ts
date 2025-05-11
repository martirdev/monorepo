import { z } from "zod";

import { clientSchema } from "./utils";

export type CreateClientForm = z.infer<typeof clientSchema>;

export type Client = {
  id: string;
  firstName: string;
  secondName: string;
  thirdName: string;
  contacts: { type: string; contact: string }[];
  createdAt: string;
  updatedAt: string;
};

export type ClientsFilterForm = {
  name: string;
};
