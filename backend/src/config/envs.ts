import { config } from "dotenv";

config();

export const PORT = process.env.PORT;

export const DB_CREDENTIALS = {
  type: process.env.DB_TYPE,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};
