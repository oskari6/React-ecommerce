export default function ShoppingCartItem(props) {
  return (
    <div className="flex w-full justify-start gap-4 items-center pb-4 border-b-[2px]">
      <div className="h-[100px] w-[100px] items-center">
        <img
          className="w-full h-full object-contain"
          src="images/placeholder-2.png"
        />
      </div>
      <div className="flex flex-col justify-center items-start">
        <h4>Product #{props.number}</h4>
        <p>Name:&nbsp;{props.itemName}</p>
        <p>Color:&nbsp;{props.itemQuantity}</p>
        <p>Price (Quantity):&nbsp;{props.itemPrice}</p>
      </div>
      <div className="font-[700] text-[black]">
        <p className="">Total:&nbsp;{props.itemTotal}</p>
      </div>
    </div>
  );
}
