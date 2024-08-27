import Card from "./Card";

export default function Gallery() {
  return (
    <main className="h-screen col-span-2">
      <h1 className="text-4xl font-bold mx-4 mb-6">Desserts</h1>
      <div className=" px-2 gap-1">
        <Card />
      </div>
    </main>
  );
}
