import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type TicketUpdateInput = {
  price?: number | null;
  seatNumber?: string | null;
  event?: EventWhereUniqueInput | null;
};
