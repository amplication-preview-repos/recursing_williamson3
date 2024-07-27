import { Ticket } from "../ticket/Ticket";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  date: Date | null;
  location: string | null;
  tickets?: Array<Ticket>;
};
