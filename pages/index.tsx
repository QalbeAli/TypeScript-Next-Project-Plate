import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>TS Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-3xl'>
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

    </div>
  )
}

export default Home
