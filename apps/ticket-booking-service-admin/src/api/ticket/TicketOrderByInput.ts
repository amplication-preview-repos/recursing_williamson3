import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  seatNumber?: SortOrder;
  eventId?: SortOrder;
};
