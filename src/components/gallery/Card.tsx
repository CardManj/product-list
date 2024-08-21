import {
  AddToCardIcon,
  DecrementIcon,
  IncrementIcon,
} from "../../assets/icons";
import React from "react";

export default function Card() {
  return (
    <section className="w-44 h-64 rounded-t-md ">
      <section className="flex flex-col justify-center aling-center items-center">
        <img
          src="src\assets\images\image-waffle-desktop.jpg"
          alt="product image"
          className="w-[100%] rounded-md"
        />
        <button className="flex items-center justify-center border rounded-3xl w-30 h-fit px-3 py-2 border-MentorRed bg-white text-xs">
          <AddToCardIcon className="w-4 mx-1" />
          Add to card
        </button>
      </section>
      <section className="px-1 flex flex-col pt-1 mt-3">
        <span className="text-xs text-gray-400 font-light">categoria</span>
        <h1 className="text-lg 16px font-semibold">titulo</h1>
        <p className="text-sm text-MentorRed">precio</p>
      </section>
    </section>
  );
}
