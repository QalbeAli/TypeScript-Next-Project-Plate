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
          <h1 className="py-6">Find more than just your next house</h1>
          <Swiper speed={500} slidesPerView={5}>
            <SwiperSlide className="p-6">
              <div className="w-[300px]  max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-white dark:bg-white">
                <a href="#">
                  <Image className="rounded-t-lg" src={Images.sale1} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-black-900 text-md mb-2 font-bold tracking-tight dark:text-black">
                      Commercial Property For Sale
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Harare CBD, Harare
                  </p>
                  <p className="mb-3 text-xl font-normal text-[#358FCA] dark:text-[#358FCA]">
                    USD 130000
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-6">
              <div className="ml-[7rem] w-[300px]  max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-white dark:bg-white">
                <a href="#">
                  <Image className="rounded-t-lg" src={Images.sale1} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-black-900 text-md mb-2 font-bold tracking-tight dark:text-black">
                      Commercial Property For Sale
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Harare CBD, Harare
                  </p>
                  <p className="mb-3 text-xl font-normal text-[#358FCA] dark:text-[#358FCA]">
                    USD 130000
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-6">
              <div className="ml-[14rem] w-[300px]  max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-white dark:bg-white">
                <a href="#">
                  <Image className="rounded-t-lg" src={Images.sale1} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-black-900 text-md mb-2 font-bold tracking-tight dark:text-black">
                      Commercial Property For Sale
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Harare CBD, Harare
                  </p>
                  <p className="mb-3 text-xl font-normal text-[#358FCA] dark:text-[#358FCA]">
                    USD 130000
                  </p>
                </div>
              </div>
                      </SwiperSlide>
                      <SwiperSlide className="p-6">
              <div className="ml-[14rem] w-[300px]  max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-white dark:bg-white">
                <a href="#">
                  <Image className="rounded-t-lg" src={Images.sale1} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-black-900 text-md mb-2 font-bold tracking-tight dark:text-black">
                      Commercial Property For Sale
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Harare CBD, Harare
                  </p>
                  <p className="mb-3 text-xl font-normal text-[#358FCA] dark:text-[#358FCA]">
                    USD 130000
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </>
  )
}

export default Sale
