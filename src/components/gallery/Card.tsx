import { data_group } from "../../../data";
import { Button } from "../Button";

export default function Card() {
  return (
    <section className="w-72 rounded-t-md">
      <section className="flex flex-col justify-center aling-center items-center">
        <img
          src="src\assets\images\image-waffle-desktop.jpg"
          alt="product image"
          className="w-full rounded-xl"
        />
        <Button />
      </section>
      {data_group.map((data) => (
        <section className="px-1 flex flex-col py-1 mt-3">
          <span className="text-xs text-gray-400 font-light mb-1">
            {data.category}
          </span>
          <h1 className="text-xl 16px font-semibold">{data.name}</h1>
          <p className="text-sm font-semibold text-MentorRed">${data.price}</p>
        </section>
      ))}
    </section>
  );
}
