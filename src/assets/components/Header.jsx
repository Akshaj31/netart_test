import React from 'react'
import logo from '../../../public/logo.png'

const Header = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center'>
            <img className='flex sm:w-[70%] md:w-[55%] h-auto m-4' src={logo} alt="" />
        </div>
    </div>
  )
}

export default Header