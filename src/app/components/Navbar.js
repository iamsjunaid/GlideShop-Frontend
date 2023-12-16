import React from 'react'
import { BsCart3 } from "react-icons/bs";
const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto py-8 md:py-0 flex flex-wrap flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/images/logo.png" alt="logo" className="w-32 rounded-lg"/>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <BsCart3 className="absolute top-16 right-4 sm:static w-6 h-6 ml-2" />
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar