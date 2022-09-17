import React from 'react'
import Image from 'next/image'
import Images from '../../public/images/Images'
const Banner = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Image
          className="lazyloadedhidden md:block"
          src={Images.Banner}
          alt="Banner"
        />
      </div>
    </div>
  )
}

export default Banner
