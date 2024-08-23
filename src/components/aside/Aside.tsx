// import {
//   AddToCardIcon,
//   DecrementIcon,
//   IncrementIcon,
//   OrderConfirmedIcon,
//   RemoveItemIcon,
//   TreeLogoIcon,
//   EmptyCart,
// } from "../../assets/icons/index";

import { EmptyCart } from "../../assets/icons";

export default function Aside() {
  return (
    <aside className="bg-white w-[70%] h-fit p-6 flex flex-col rounded-2xl shadow-md">
      <h1 className="text-MentorRed text-3xl font-semibold ">Your Cart (0)</h1>
      <div className="flex items-center flex-col justify-center my-10 mt-14">
        <EmptyCart />
        <p className="text-lg text-MentorRose/500 font-semibold pt-4">
          Your added items will appear here
        </p>
      </div>
    </aside>
  );
}
