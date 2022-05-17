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
      Boiler Plate for TypeScript Project
      </div>

    </div>
  )
}

export default Home
