import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  id: string;
  isCompleted: boolean;
  text: string;
  uid?: User | null;
  updatedAt: Date;
};
