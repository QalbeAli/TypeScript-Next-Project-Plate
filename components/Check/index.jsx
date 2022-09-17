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
          <h1 className="py-6">Find more than just your next house</h1>
          <Swiper speed={500} slidesPerView={5}>
            <SwiperSlide>
              <div>
                <a
                  href="/"
                  className="widget-thumb block px-2 pt-3 text-sm text-white lg:text-2xl"
                  style={{
                    backgroundImage: `url(images/insurance.png)`,
                    width: '200px',
                    height: '279px',
                  }}
                >
                  HOME INSURANCE
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a
                  href="/"
                  className="widget-thumb block px-2 pt-3 text-sm text-white lg:text-2xl"
                  style={{
                    backgroundImage: `url(images/insurance.png)`,
                    width: '200px',
                    height: '279px',
                  }}
                >
                  HOME INSURANCE
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a
                  href="/"
                  className="widget-thumb block px-2 pt-3 text-sm text-white lg:text-2xl"
                  style={{
                    backgroundImage: `url(images/insurance.png)`,
                    width: '200px',
                    height: '279px',
                  }}
                >
                  HOME INSURANCE
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a
                  href="/"
                  className="widget-thumb block px-2 pt-3 text-sm text-white lg:text-2xl"
                  style={{
                    backgroundImage: `url(images/insurance.png)`,
                    width: '200px',
                    height: '279px',
                  }}
                >
                  HOME INSURANCE
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a
                  href="/"
                  className="widget-thumb block px-2 pt-3 text-sm text-white lg:text-2xl"
                  style={{
                    backgroundImage: `url(images/insurance.png)`,
                    width: '200px',
                    height: '279px',
                  }}
                >
                  HOME INSURANCE
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a
                  href="/"
                  className="widget-thumb block px-2 pt-3 text-sm text-white lg:text-2xl"
                  style={{
                    backgroundImage: `url(images/insurance.png)`,
                    width: '200px',
                    height: '279px',
                  }}
                >
                  HOME INSURANCE
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a
                  href="/"
                  className="widget-thumb block px-2 pt-3 text-sm text-white lg:text-2xl"
                  style={{
                    backgroundImage: `url(images/insurance.png)`,
                    width: '200px',
                    height: '279px',
                  }}
                >
                  HOME INSURANCE
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a
                  href="/"
                  className="widget-thumb block px-2 pt-3 text-sm text-white lg:text-2xl"
                  style={{
                    backgroundImage: `url(images/insurance.png)`,
                    width: '200px',
                    height: '279px',
                  }}
                >
                  HOME INSURANCE
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </>
  )
}
