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
      <div className="w-full sm:w-1/2 flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="text"
          placeholder="Enter Your City"
          className="w-full sm:w-3/4 bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-[#9a4747] focus:bg-transparent border border-gray-300 focus:border-[#9a4747] text-base outline-none text-gray-700 py-1 px-3"
        />
        <input
          type="text"
          placeholder="Enter Your State"
          className="w-full sm:w-3/4 bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-[#9a4747] focus:bg-transparent border border-gray-300 focus:border-[#9a4747] text-base outline-none text-gray-700 py-1 px-3"
        />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col gap-4">
        <h4 className="text-md mr-auto">2. Review cart items.</h4>
        <ol className="list-decimal items-center">
          {Object.keys(cart).map((k) => {
            return (
              <li key={k} className="flex justify-between items-center bg-[#d8d8fe] p-4">
                <div className="flex flex-col">
                  <h1 className="font-bold">{cart[k].name}</h1>
                  <h2 className="text-sm">{cart[k].size} {cart[k].variant}</h2>
                </div>

                <div className="flex items-center">
                  <HiOutlineMinus className="text-xl cursor-pointer hover:text-[#9a4747]" onClick={() => deleteItemFromCart(k)} />
                  <h1 className="mx-2">{cart[k].qty}</h1>
                  <HiOutlinePlus className="text-xl cursor-pointer hover:text-[#9a4747]" onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} />
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default checkout
