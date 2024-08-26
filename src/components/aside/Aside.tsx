import { EmptyCart } from "../../assets/icons";

// Define la interfaz Data localmente en este archivo
interface ImageType {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Data {
  id: number;
  image: ImageType;
  name: string;
  category: string;
  price: number;
}

interface AsideProps {
  cartItems: { product: Data; quantity: number }[];
}

export default function Aside({ cartItems }: AsideProps) {
  return (
    <aside className="bg-white w-[70%] h-fit p-6 flex flex-col rounded-2xl shadow-md">
      <h1 className="text-MentorRed text-3xl font-semibold ">
        Your Cart ({cartItems.length})
      </h1>
      <div className="flex items-center flex-col justify-center my-10 mt-14">
        {cartItems.length === 0 ? (
          <>
            <EmptyCart />
            <p className="text-lg text-MentorRose/500 font-semibold pt-4">
              Your added items will appear here
            </p>
          </>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product.id} className="mb-2 flex items-center">
                <img
                  src={item.product.image.thumbnail}
                  alt={item.product.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-md font-semibold">{item.product.name}</h3>
                  <p className="text-sm text-gray-600">
                    ${item.product.price} x {item.quantity} = $
                    {item.product.price * item.quantity}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
