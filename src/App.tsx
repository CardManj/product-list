import Gallery from "./components/gallery/Gallery";
import Aside from "./components/aside/Aside";
function App() {
  return (
    <main className="bg-MentorRose/50 grid grid-flow-col gap-1 grid-cols-3 px-3 pt-16">
      <Gallery />
      <Aside />
    </main>
  );
}

export default App;
