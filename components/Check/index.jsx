import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from '@mui/material'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

export default function Category() {
  return (
    <>
      <Container>
        <div className="p-12">
          <h1 className="py-6">Check Out Reviews</h1>
          <Swiper speed={500} slidesPerView={3}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <SwiperSlide>
                  <div
                    href="#"
                    className=" w-[20rem] relative block p-4 overflow-hidden border border-gray-100 rounded-lg"
                  >
                    <span
                      className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className="justify-between sm:flex">
                      <div>
                        <h5 className="text-xl font-bold text-gray-900">
                          Review From The Mark
                        </h5>


                      </div>

                      <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <img
                          alt="Paul Clapton"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                          className="object-cover w-16 h-16 rounded-lg shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                      <p className="text-sm text-gray-500">
                        One of the Best Place For Renting and Buying the Properties. 100% Trusted Platform.Highly Recommended
                      </p>
                    </div>

                    <dl className="flex mt-6">
                      <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Published</dt>
                        <dd className="text-xs text-gray-500">31st June, 2022</dd>
                      </div>


                    </dl>
                  </div>


                </SwiperSlide>
              ))
            }


          </Swiper>
        </div>
      </Container>
    </>
  )
}
