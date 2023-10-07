import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  isCompleted?: BooleanFilter;
  text?: StringFilter;
  uid?: UserWhereUniqueInput;
};
