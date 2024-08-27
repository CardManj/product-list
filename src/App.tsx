import Gallery from "./components/gallery/Gallery";
import Aside from "./components/aside/Aside";
function App() {
  return (
    <main className="bg-MentorRose/50 grid grid-col gap-1 grid-cols-3 px-16 pt-16 max-xl:px-5 max-sm:px-0 max-sm:py-5 max-sm:flex max-sm:flex-col ">
      <Gallery />
      <Aside />
    </main>
  );
}

export default App;
