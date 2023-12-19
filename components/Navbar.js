import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import { IoCloseOutline, IoBagHandleOutline, IoTrashOutline } from 'react-icons/io5'
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'

const Navbar = () => {
  const [cartPopup, setCartPopup] = useState(false)

  const handleCartPopup = () => {
    setCartPopup(!cartPopup)
  }

  return (
    <div>
      <header className="body-font shadow-md sticky top-0">
        <div className="container mx-auto py-8 md:py-0 flex flex-wrap flex-col md:flex-row items-center relative">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={500}
              height={187}
              className="w-32 rounded-lg"
            />
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/tshirts" className="mr-5 hover:text-[#9a4747]">
              Tshirts
            </Link>
            <Link href="/hoodies" className="mr-5 hover:text-[#9a4747]">
              Hoodies
            </Link>
            <Link href="/mugs" className="mr-5 hover:text-[#9a4747]">
              Mugs
            </Link>
            <Link href="/stickers" className="mr-5 hover:text-[#9a4747]">
              Stickers
            </Link>
          </nav>
          <BsCart3 className="absolute top-8 right-4 md:static w-6 h-6 ml-2 cursor-pointer hover:text-[#9a4747]" onClick={handleCartPopup} />
        </div>
      </header>
      {cartPopup && (
        <div className={`cart blur-0 bg-[#fff] text-center p-4 w-full sm:w-1/4 absolute right-0 sm:top-[12.5%] top-36 backdrop-filter backdrop-blur text-black h-3/4 transform transition-transform ease-in-out duration-500 border-2 rounded-md border-[#9a4747] ${cartPopup ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="grid grid-rows-3 gap-4 content-between">
            <div className="flex justify-between align-middle">
              <h1 className="font-bold text-2xl underline">Your Cart</h1>
              <IoCloseOutline className="text-2xl cursor-pointer hover:text-[#fff] hover:rounded-full hover:bg-gray-400" onClick={handleCartPopup} />
            </div>
            <ol className="list-decimal items-center">
              <li className="flex justify-center gap-16 border-b-2 border-[##9a4747]">
                <h2 className="font-semibold text-xl">Tshirts</h2>
                <div className="flex items-center gap-4">
                  <HiOutlineMinus className="text-black-400 rounded-lg text-2xl cursor-pointer hover:text-[#fff] hover:rounded-full hover:bg-gray-400" />
                  <p className="font-semibold text-xl">1</p>
                  <HiOutlinePlus className="text-black-400 rounded-lg text-2xl cursor-pointer hover:text-[#fff] hover:rounded-full hover:bg-gray-400" />
                </div>
              </li>
            </ol>
            <div className="flex">
              <button className="flex items-center mx-auto mt-16 border-solid border-[#9a4747] border-2 py-2 px-8 text-[#9a4747] focus:outline-none hover:underline rounded text-lg"><IoTrashOutline className="text-xl" />Clear</button>
              <button className="flex items-center mx-auto mt-16 text-white bg-[#9a4747] py-2 px-8 focus:outline-none hover:underline rounded text-lg"><IoBagHandleOutline className="text-xl" />Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
