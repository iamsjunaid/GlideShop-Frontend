import React from 'react'
import { BsCart3 } from "react-icons/bs";
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-md mb-4 sticky top-0">
        <div className="container mx-auto py-8 md:py-0 flex flex-wrap flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/images/logo.png" alt="logo" className="w-32 rounded-lg" />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/tshirts" className="mr-5 hover:text-gray-900">
              First Link
            </Link>


            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <BsCart3 className="absolute top-8 right-4 sm:static w-6 h-6 ml-2" />
        </div>
      </header>
    </div>
  )
}

export default Navbar