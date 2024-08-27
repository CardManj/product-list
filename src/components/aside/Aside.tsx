import { EmptyCart } from "../../assets/icons";

export default function Aside() {
  return (
    <aside className="bg-white w-[75%] h-fit p-6 flex flex-col rounded-2xl shadow-md max-[1660px]:w-full max-sm:z-20 max-sm:fixed max-sm:bottom-0 max-sm:rounded-none max-sm:shadow-xl">
      <h1 className="text-MentorRed text-3xl font-semibold max-md:text-2xl">
        Your Cart (0)
      </h1>
      <div className="flex items-center flex-col justify-center  my-10 mt-14">
        <EmptyCart className="max-md:w-[70%]" />
        <p className="text-center text-lg text-MentorRose/500 font-semibold pt-4 max-sm:text-base">
          Your added items will appear here
        </p>
      </div>
    </aside>
  );
}
