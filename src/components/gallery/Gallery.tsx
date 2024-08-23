import Card from "./Card";

export default function Gallery() {
  return (
    <main className="h-screen col-span-2">
      <h1 className="text-4xl font-bold mx-2 mb-6">Desserts</h1>
      <div className="grid grid-flow-col px-2 gap-1 grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
