import React from 'react'

import { useRouter } from 'next/router'

import MyButton from '../components/MyButton'

import { MdTimer } from 'react-icons/md'
import { GiCardPick, GiClick } from 'react-icons/gi'

const Stat = (props) => {
  const { icon, data } = props
  return (
    <p className="flex items-center mx-4 text-xl font-semibold">
      <span className="mr-1 text-2xl">{icon}</span> {data}
    </p>
  )
}

const Board = () => {
  const router = useRouter()

  const userOption = {
    theme: router.query.theme,
    difficulty: router.query.difficulty
  }

  console.log(userOption.theme, userOption.difficulty)

  return (
    <main className="2xl:px-96 lg:px-36 px-5 mx-auto mt-2 md:mt-10 rounded-xl text-slate-500 ">
      <div className="shadow-lg p-2 rounded-xl bg-slate-100 ">
        {/* HEADER */}
        <div className="flex justify-between">
          <h1 className="text-3xl font-extrabold">memory</h1>
          <div className="flex   ">
            <Stat icon={<MdTimer />} data="01:27" />
            <Stat icon={<GiCardPick />} data="8" />
            <Stat icon={<GiClick />} data="31" />
          </div>
          <div className="flex">
            <MyButton
              myClasses={`bg-slate-500 mr-2 hover:bg-slate-700`}
              title="Menu"
              // onClick={openModal}
            />
            <MyButton
              myClasses={`bg-yellow-500 hover:bg-yellow-700`}
              title="Restart"
              // onClick={openModal}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Board
