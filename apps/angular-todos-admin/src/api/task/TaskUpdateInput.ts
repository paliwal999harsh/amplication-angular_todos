import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  isCompleted?: boolean;
  text?: string;
  uid?: UserWhereUniqueInput | null;
};
