import { User } from "../user/User";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orderDate: Date | null;
  totalAmount: number | null;
  user?: User | null;
};
