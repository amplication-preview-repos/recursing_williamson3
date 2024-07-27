import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type EventWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  location?: StringNullableFilter;
  tickets?: TicketListRelationFilter;
};
