import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type TicketCreateInput = {
  price?: number | null;
  seatNumber?: string | null;
  event?: EventWhereUniqueInput | null;
};
