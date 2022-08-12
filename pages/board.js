import React from 'react'

import { useRouter } from 'next/router'

const Board = () => {
  const router = useRouter()

  const userOption = {
    theme: router.query.theme,
    difficulty: router.query.difficulty
  }

  return (
    <div>
      plop ! board {userOption.theme} {userOption.difficulty}
    </div>
  )
}

export default Board
