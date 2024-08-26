import Gallery from "./components/gallery/Gallery";
import Aside from "./components/aside/Aside";

// Datos de ejemplo para cartItems
const sampleCartItems = [
  {
    product: {
      id: 0o50121,
      image: {
        thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
        mobile: "./assets/images/image-waffle-mobile.jpg",
        tablet: "./assets/images/image-waffle-tablet.jpg",
        desktop: "./assets/images/image-waffle-desktop.jpg",
      },
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.5,
    },
    quantity: 1,
  },
];

function App() {
  return (
    <main className="bg-MentorRose/50 grid grid-cols-3 gap-1 px-16 pt-16">
      <Gallery />
      <Aside cartItems={sampleCartItems} />
    </main>
  );
}

export default App;
