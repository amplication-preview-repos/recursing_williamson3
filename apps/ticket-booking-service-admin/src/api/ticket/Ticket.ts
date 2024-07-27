import { Event } from "../event/Event";

export type Ticket = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  seatNumber: string | null;
  event?: Event | null;
};
