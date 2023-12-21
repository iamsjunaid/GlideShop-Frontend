// https://nobero.com/cdn/shop/files/fog_945d6882-111a-4a9d-9252-46d2c49f925d.jpg?v=1698253372&width=360

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const hoodies = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 gap-16 justify-center">
          <div className="lg:w-1/5 md:w-1/2 p-4 w-4/5 border border-gray-200 rounded-lg hover:shadow-lg">
            <Link href="product/[slug]" as="/product/some-product-slug">
              <div className="block relative h-48 rounded overflow-hidden">
                <Image
                  src="https://nobero.com/cdn/shop/files/fog_945d6882-111a-4a9d-9252-46d2c49f925d.jpg?v=1698253372&width=360"
                  alt="ecommerce"
                  width={420}
                  height={260}
                  className="object-contain object-center w-full h-full block"
                />
              </div>
            </Link>
            <div className="mt-4 text-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default hoodies
