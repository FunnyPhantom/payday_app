import { Schema, model } from "mongoose";

export interface IUserModel {
  userId: string;
  homeViewId: string;
  btcAddress?: string;
  isMemeMode: boolean;
}

const UserSchema = new Schema<IUserModel>({
  userId: String,
  homeViewId: String,
  btcAddress: String,
  isMemeMode: { type: Boolean, default: false },
});

const User = model<IUserModel>("User", UserSchema);

export { User };
