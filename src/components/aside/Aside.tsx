import {
  AddToCardIcon,
  DecrementIcon,
  IncrementIcon,
  OrderConfirmedIcon,
  RemoveItemIcon,
  TreeLogoIcon,
  EmptyCart,
} from "../../assets/icons/index";

export default function Aside() {
  return (
    <aside className="bg-slate-400 col-span-1">
      <h1>aside</h1>
      <div className="grid gap-2 p-5">
        <AddToCardIcon></AddToCardIcon>
        <DecrementIcon></DecrementIcon>
        <IncrementIcon></IncrementIcon>
        <OrderConfirmedIcon></OrderConfirmedIcon>
        <RemoveItemIcon></RemoveItemIcon>
        <TreeLogoIcon></TreeLogoIcon>
        <EmptyCart></EmptyCart>
      </div>
    </aside>
  );
}
