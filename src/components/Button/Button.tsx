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
    if (isActive) {
      alert("You're shure?");
      // Si el botón está activo, lo pasamos a inactivo y reseteamos la cantidad
      setIsActive(false);
      setQuantity(1);
    } else {
      // Si el botón está inactivo, lo activamos
      setIsActive(true);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="absolute items-center transition-colors delay-75">
      {!isActive ? (
        // Botón inactivo
        <button
          className="flex items-center justify-center border rounded-3xl w-30 h-fit px-3 py-2 border-MentorRed bg-white text-xs"
          onClick={handleToggle}
        >
          <AddToCardIcon className="mr-2" />
          Add to Cart
        </button>
      ) : (
        // Botón activo
        <div className="cursor-pointer flex items-center justify-center border rounded-3xl w-30 h-fit px-3 py-2 border-MentorRed bg-MentorRed text-white text-xs">
          <button
            className="px-1 items-center border border-white py-2  hover:bg-white hover:text-MentorRed rounded-full"
            onClick={handleDecrement}
          >
            <DecrementIcon className="" />
          </button>
          <span className="px-5" onClick={handleToggle}>
            {quantity}
          </span>
          <button
            className="px-1 flex items-center justify-center  border border-white py-1 hover:bg-white hover:text-MentorRed rounded-full"
            onClick={handleIncrement}
          >
            <IncrementIcon className="" />
          </button>
        </div>
      )}
    </div>
  );
}
