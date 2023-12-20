const checkout = ({ cart, addToCart, deleteItemFromCart, subTotal }) => {
  return (
    <div className="w-full flex flex-col items-center h-full gap-4 my-8 p-4">
      <div className="w-full sm:w-1/2">
        <h4 className="text-3xl text-center">Checkout</h4>
        <p className="text-md mr-auto">1. Fill your details.</p>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="name"
          placeholder="Enter Your Name"
          className="w-full sm:w-3/4 bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-[#9a4747] focus:bg-transparent border border-gray-300 focus:border-[#9a4747] text-base outline-none text-gray-700 py-1 px-3"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full sm:w-3/4 bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-[#9a4747] focus:bg-transparent border border-gray-300 focus:border-[#9a4747] text-base outline-none text-gray-700 py-1 px-3"
        />
      </div>
      <textarea
        type="text"
        placeholder="Enter Your Address"
        className="w-full sm:w-1/2 bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-[#9a4747] focus:bg-transparent border border-gray-300 focus:border-[#9a4747] text-base outline-none text-gray-700 py-1 px-3"
      />
    </div>
  )
}

export default checkout
