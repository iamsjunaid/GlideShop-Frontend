const checkout = ({ cart, addToCart, deleteItemFromCart, subTotal }) => {
  return (
    <div className="w-full flex flex-col items-center h-full gap-4 my-8 p-4">
      <div className="w-full sm:w-1/2">
        <h4 className="text-3xl text-center">Checkout</h4>
        <p className="text-md mr-auto">1. Fill your details.</p>
      </div>
    </div>
  )
}

export default checkout
