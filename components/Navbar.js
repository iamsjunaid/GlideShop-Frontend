import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import { IoCloseOutline } from 'react-icons/io5'
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'

const Navbar = () => {
  const [cartPopup, setCartPopup] = useState(false)

  const handleCartPopup = () => {
    setCartPopup(!cartPopup)
  }

  return (
    <div>
      <header className="text-gray-600 body-font shadow-md sticky top-0">
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
            <Link href="/tshirts" className="mr-5 hover:text-gray-900">
              Tshirts
            </Link>
            <Link href="/hoodies" className="mr-5 hover:text-gray-900">
              Hoodies
            </Link>
            <Link href="/mugs" className="mr-5 hover:text-gray-900">
              Mugs
            </Link>
            <Link href="/stickers" className="mr-5 hover:text-gray-900">
              Stickers
            </Link>
          </nav>
          <BsCart3 className="absolute top-8 right-4 md:static w-6 h-6 ml-2 cursor-pointer hover:text-[#9a4747]" onClick={handleCartPopup} />
        </div>
      </header>
      {cartPopup && (
        <div className={`bg-[#fff] text-center p-4 w-full sm:w-1/4 absolute right-0 sm:top-0 top-36 backdrop-filter backdrop-blur text-black h-screen transform transition-transform ease-in-out duration-500 ${cartPopup ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="grid grid-rows-3 gap-4 content-between">
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
