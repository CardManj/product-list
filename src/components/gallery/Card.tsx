import { data_group } from "../../../data";
import { Button } from "../Button";

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

export default function Card() {
  return (
    <section className="group grid grid-cols-3 gap-10 w-fit  mx-2 max-xl:grid-cols-2 max-[848px]:grid-cols-1 max-sm:grid-cols-1 max-sm:items-center max-sm:justify-center">
      {data_group.map((data: Data) => (
        <section
          key={data.id}
          className="w-full rounded-t-md rounded-b-xl hover:shadow-xl"
        >
          <section className="overflow-hidden flex flex-col justify-center align-center items-center">
            {/* Llama a la función para obtener la imagen según el dispositivo */}
            <img
              src={getImageByDevice(data.image)}
              alt={`${data.name} image`}
              className="w-full  rounded-xl object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </section>

          <section className="px-1.5 rounded-b-xl flex flex-col pb-2 ">
            <Button />
            <span className=" text-xs text-gray-400 font-light mb-1">
              {data.category}
            </span>
            <h1 className="max-lg:text-lg text-xl font-semibold">
              {data.name}
            </h1>
            <p className="max-lg:text-xs text-sm font-semibold text-MentorRed">
              ${data.price.toFixed(2)}
            </p>
          </section>
        </section>
      ))}
    </section>
  );
}
