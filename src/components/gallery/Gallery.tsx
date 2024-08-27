import Card from "./Card";

export default function Gallery() {
  return (
    <main className="col-span-2">
      <h1 className="text-4xl font-bold mx-4 mb-6 max-lg:text-3xl">Desserts</h1>
      <div className="px-2 gap-1">
        <Card />
      </div>
    </main>
  );
}
