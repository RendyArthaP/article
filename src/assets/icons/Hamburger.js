import React from 'react'

const Hamburger = () => {
  return (
    <div className="flex md:hidden cursor-pointer">
      <svg viewBox="0 0 100 80" width="30" height="30" fill="#000000">
        <rect width="80" height="8"></rect>
        <rect y="30" width="80" height="8"></rect>
        <rect y="60" width="80" height="8"></rect>
      </svg>
    </div>
  )
}

export default Hamburger
