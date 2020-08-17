import React from 'react'

const Header = () => {
  return (
    <header className="bg-light-gray flex justify-center items-center ph2 pt3 pb4">
      <img
        src="poring.gif"
        className="flex-none mr4"
        style={{ height: '3rem' }}
      />
      <div>
        <span className="f1 b dark-blue">Valhala</span>
        <span className="f3 b blue ml1 relative" style={{ top: '1rem' }}>
          IFUSP
        </span>
      </div>
    </header>
  )
}

export default Header
