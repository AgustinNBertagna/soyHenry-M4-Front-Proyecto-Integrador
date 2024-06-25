import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "products" })
export default class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("text")
  description: string;

  @Column("float")
  price: string;

  @Column("int")
  stock: number;
}
