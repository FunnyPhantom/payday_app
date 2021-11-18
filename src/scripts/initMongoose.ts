import * as mongoose from "mongoose";
import { EnvVars } from "utils";

export type TMongoose = typeof mongoose;

const initMongoose = async (m: TMongoose) =>
  m.connect(EnvVars.MONGO_CONNECTION_URL);

export { initMongoose };
