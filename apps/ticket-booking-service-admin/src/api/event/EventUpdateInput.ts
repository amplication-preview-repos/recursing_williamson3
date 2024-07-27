import { TicketUpdateManyWithoutEventsInput } from "./TicketUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  name?: string | null;
  description?: string | null;
  date?: Date | null;
  location?: string | null;
  tickets?: TicketUpdateManyWithoutEventsInput;
};
