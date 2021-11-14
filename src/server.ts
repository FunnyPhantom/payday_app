import dotEnv from "dotenv";

export const config = () => {
  dotEnv.config();
  console.log(process.env.TEST_ENV_VAR);
};
