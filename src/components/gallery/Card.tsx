import { useState } from "react";
import { data_group } from "../../../data";
import { Button } from "../Button";
import Aside from "../aside/Aside";

// Define la interfaz para la imagen
interface ImageType {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

// Define la interfaz para los datos del producto
interface Data {
  id: number;
  image: ImageType;
  name: string;
  category: string;
  price: number;
}

export default function Card() {
  const [cartItems, setCartItems] = useState<
    { product: Data; quantity: number }[]
  >([]);

  const addToCart = (product: Data, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { product, quantity }];
    });
  };

  return (
    <div className="flex">
      <section className="grid grid-cols-3 gap-10 w-fit mr-5">
        {data_group.map((data: Data) => (
          <section
            key={data.id}
            className="w-full rounded-t-md rounded-b-xl hover:shadow-xl"
          >
            <section className="overflow-hidden flex flex-col justify-center align-center items-center">
              <img
                src={getImageByDevice(data.image)}
                alt={`${data.name} image`}
                className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
              {/* Pasar la función addToCart y los detalles del producto al botón */}
              <Button onAddToCart={(quantity) => addToCart(data, quantity)} />
            </section>
            <section className="px-2 rounded-b-xl flex flex-col py-2 mt-3">
              <span className="text-xs text-gray-400 font-light mb-1">
                {data.category}
              </span>
              <h1 className="text-xl font-semibold">{data.name}</h1>
              <p className="text-sm font-semibold text-MentorRed">
                ${data.price}
              </p>
            </section>
          </section>
        ))}
      </section>

      {/* Renderer el componente Aside con los productos del carrito */}
      <Aside cartItems={cartItems} />
    </div>
  );
}

// Función auxiliar para seleccionar la imagen adecuada según el tamaño de la pantalla
const getImageByDevice = (image: ImageType): string => {
  if (window.innerWidth < 640) {
    return image.mobile; // Para pantallas móviles
  } else if (window.innerWidth < 1024) {
    return image.tablet; // Para pantallas de tablet
  } else {
    return image.desktop; // Para pantallas de escritorio
  }
};
