import { useState, useEffect } from 'react'

import Head from 'next/head'

import MyButton from '../components/MyButton'

import { GiBrainFreeze } from 'react-icons/gi'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Memory Game</title>
        <meta name="Memory game" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container  mx-auto  mt-10">
        <div className="shadow-lg p-2 rounded-xl ">
          {/* HEADER */}
          <div className=" flex justify-between">
            <h1 className="text-3xl font-extrabold">memory</h1>
            <MyButton
              bgColor={`bg-yellow-500`}
              color="yellow"
              title="New Game"
              onClick={() => console.log('plop')}
            />
          </div>

          {/* CONTENT */}
          {/* <img src="" alt="landing page" /> */}
          <div className="flex justify-center  text-yellow-400">
            <GiBrainFreeze size={300} />
          </div>
        </div>
      </main>
    </div>
  )
}
