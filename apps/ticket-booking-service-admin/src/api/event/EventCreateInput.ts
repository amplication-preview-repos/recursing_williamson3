import { TicketCreateNestedManyWithoutEventsInput } from "./TicketCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  name?: string | null;
  description?: string | null;
  date?: Date | null;
  location?: string | null;
  tickets?: TicketCreateNestedManyWithoutEventsInput;
};
