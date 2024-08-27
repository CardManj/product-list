import {
  AddToCardIcon,
  DecrementIcon,
  IncrementIcon,
} from "../../assets/icons";
import { useState } from "react";

export function Button() {
  const [isActive, setIsActive] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleToggle = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  // absolute inset-x-0 top-1/2 transform -translate-y-1/2
  return (
    <div className=" text-xs z-10 -mt-5 flex items-center justify-center transition-colors delay-75">
      {!isActive ? (
        // Botón inactivo
        <button
          className="transition-colors duration-200 ease-in hover:text-MentorRed hover:border-MentorRed flex items-center justify-center border border-gray-400 rounded-3xl w-30 h-fit px-3 py-2  bg-white  font-bold"
          onClick={handleToggle}
        >
          <AddToCardIcon className="mr-2" />
          Add to Cart
        </button>
      ) : (
        // Botón activo
        <div className=" font-semibold cursor-pointer flex items-center justify-center border rounded-3xl w-30 h-fit px-3 py-2 border-MentorRed bg-MentorRed text-white">
          <button
            className="transition-colors duration-200 ease-linear px-1 items-center border border-white py-2  hover:bg-white hover:text-MentorRed rounded-full"
            onClick={handleDecrement}
          >
            <DecrementIcon className="" />
          </button>
          <span className="px-5">{quantity}</span>
          <button
            className="transition-colors duration-200 ease-linear px-1 flex items-center justify-center  border border-white py-1 hover:bg-white hover:text-MentorRed rounded-full"
            onClick={handleIncrement}
          >
            <IncrementIcon className="" />
          </button>
        </div>
      )}
    </div>
  );
}
