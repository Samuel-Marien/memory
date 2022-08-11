import React from 'react'

const MyButton = (props) => {
  const { title, onClick, color, bgColor } = props
  return (
    <a
      onClick={onClick}
      href="#_"
      className={`${bgColor} rounded-3xl px-2 py-1.5 overflow-hidden group  
      relative hover:bg-gradient-to-r hover:from-${color}-500 
      hover:to-${color}-400 text-white hover:ring-2 hover:ring-offset-2 
      hover:ring-${color}-400 transition-all ease-out duration-300`}
    >
      <span
        className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 
      transform translate-x-12 bg-white opacity-10 
      rotate-12 group-hover:-translate-x-40 ease"
      ></span>
      <span className="relative">{title}</span>
    </a>
  )
}

export default MyButton
