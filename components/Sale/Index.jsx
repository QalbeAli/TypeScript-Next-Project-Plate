import { Container } from '@mui/material'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import Images from '../../public/images/Images'

const Sale = () => {
  return (
    <>
      <Container>
        <div>
          <h1 className="py-6">Find your next house</h1>
          <Swiper speed={500} slidesPerView={3}>
            {
              [1, 2, 3, 4, 5, 6, 7,].map((item) => (
                <SwiperSlide className="p-6">
                  <a href="#" class="block p-4 rounded-lg shadow-sm shadow-indigo-100">
                    <Image
                      alt="Home"
                      src={Images.sale1}
                      class="object-cover w-full h-56 rounded-md"
                    />

                    <div class="mt-2">
                      <dl>
                        <div>
                          <dt className="sr-only">Price</dt>

                          <dd className="text-sm text-gray-500">$240,000</dd>
                        </div>

                        <div>
                          <dt className="sr-only">Address</dt>

                          <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                        </div>
                      </dl>

                      <dl className="flex items-center gap-8 mt-6 text-xs">
                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                          <svg
                            className="w-4 h-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            />
                          </svg>

                          <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-500">Parking</dt>

                            <dd className="font-medium">2 spaces</dd>
                          </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                          <svg
                            className="w-4 h-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>

                          <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-500">Bathroom</dt>

                            <dd className="font-medium">2 rooms</dd>
                          </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                          <svg
                            className="w-4 h-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                          </svg>

                          <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-500">Bedroom</dt>

                            <dd className="font-medium">4 rooms</dd>
                          </div>
                        </div>
                      </dl>
                    </div>
                  </a>

                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>

      </Container>
    </>
  )
}

export default Sale
