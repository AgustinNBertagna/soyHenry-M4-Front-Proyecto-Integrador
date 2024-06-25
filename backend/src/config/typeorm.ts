import { DataSource, DataSourceOptions, Repository } from "typeorm";
import { DB_CREDENTIALS } from "./envs";
import Product from "../entities/Product";

const dataSourceOptions = {
  ...DB_CREDENTIALS,
  synchronize: true,
  dropSchema: true,
  entities: ["./dist/entities/*.js"],
} as DataSourceOptions;

const DB = new DataSource(dataSourceOptions);

export const ProductsRepository: Repository<Product> = DB.getRepository(Product);

export default DB;
