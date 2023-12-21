import React from 'react'
import { IoLogInOutline } from 'react-icons/io5'
import Link from 'next/link'

const login = () => {
  return (
    <div className="relative mx-auto w-4/5 sm:w-full my-4 max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
          <p className="mt-2 text-gray-500">Sign in below to access your account</p>
        </div>
        <div className="mt-5">
          <form action="">
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-[#9a4747] focus:outline-none"
                autoComplete="NA"
              />
  )
}

export default login
