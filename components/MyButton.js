import React from 'react'

const MyButton = (props) => {
  const { title, onClick, myClasses, id } = props
  return (
    <button
      id={id}
      onClick={onClick}
      className={`${myClasses} 
      text-center rounded-3xl px-2 py-1.5 text-white font-semibold
      transition-all ease-out duration-1000 hover:shadow-lg`}
    >
      {title}
    </button>
  )
}

export default MyButton
