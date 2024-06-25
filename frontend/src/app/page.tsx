import Card from "@/components/Card";
import * as products from "../products.json";

export default function Home() {
  return (
    <main className="flex flex-col gap-1 justify-center items-center">
      {products.map(({ id, name, description, price, stock }) => (
        <Card
          key={id}
          name={name}
          description={description}
          price={price}
          stock={stock}
        />
      ))}
    </main>
  );
}
