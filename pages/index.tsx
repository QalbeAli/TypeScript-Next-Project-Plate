import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Images from '../public/images/Images'
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>TS Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='pr-4 py-3 flex justify-center items-center'>
        <div className='px-6'>
          <Image src={Images.next} width="170" height="170" />
        </div> 
        <div className='px-6 text-3xl'>
          +
        </div> 
        <div className='px-6'>
          <Image src={Images.TP} width="120" height="120" />
        </div> 
      </div>
      <div className='flex justify-center items-center text-3xl '>
      Boiler Plate for TypeScript & Next Js Project <br />
      With Installed The Tailwind Css and <br /> Mui With Cutomized theme of MUI.
      Happy Coading
      </div>
      <div className=' py-3 scale-150'>
      😎😉💖
      </div>
      <div className='text-5xl text-bold m-4 p-5 border-dashed border-4 border-pink-500'>
        Good Luck For Your Next Project
      </div>

      <div className='flex justify-center items-center'>
        <div className='px-6'>
          <Image src={Images.tailwind} width="170" height="170" />
        </div> 
        <div className='px-6 text-3xl'>
          +
        </div> 
        <div className='px-6'>
          <Image src={Images.mui} width="120" height="120" />
        </div> 
      </div>

      

    </div>
  )
}

export default Home
