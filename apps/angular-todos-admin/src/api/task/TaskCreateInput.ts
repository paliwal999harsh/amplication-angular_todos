import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  isCompleted: boolean;
  text: string;
  uid?: UserWhereUniqueInput | null;
};
