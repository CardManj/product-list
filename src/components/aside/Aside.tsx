import { useState } from "react";
import { EmptyCart, OpenArrowIcon, CloseArrowIcon } from "../../assets/icons";

export default function Aside() {
  const [isHidden, setIsHidden] = useState(false);

  const toggleAside = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      {/* Botón fijo que solo se muestra en móviles */}
      <button
        className="sm:hidden fixed right-4 bottom-[20px] px-4 py-3 text-white bg-MentorRed rounded-full shadow-lg z-30 "
        onClick={toggleAside}
      >
        {isHidden ? <OpenArrowIcon className="w-4 p-0 "/> : <CloseArrowIcon className="w-4 p-0 +"/>}
      </button>

      <aside
        className={`bg-white w-[75%] h-fit p-6 flex flex-col rounded-2xl shadow-md max-[1660px]:w-full ${
          isHidden ? "max-sm:translate-y-full" : "max-sm:translate-y-0"
        } max-sm:z-20 max-sm:fixed max-sm:bottom-0 max-sm:rounded-none max-sm:shadow-xl max-sm:transition-transform max-sm:duration-300`}
      >
        <h1 className="text-MentorRed text-3xl font-semibold max-md:text-2xl">
          Your Cart (0)
        </h1>
        <div className="flex items-center flex-col justify-center my-10 mt-14">
          <EmptyCart className="max-md:w-[70%]" />
          <p className="text-center text-lg text-MentorRose/500 font-semibold pt-4 max-sm:text-base">
            Your added items will appear here
          </p>
        </div>
      </aside>
    </>
  );
}
