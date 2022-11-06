import React from 'react'
import SignUpForm from '../components/SignUpForm'
import downApp from '../img/downloadApp.png'
import KeyboardSwitcher from '../components/KeyboardSwitcher'
import Zona from '../components/Zona'

export default function SignIn() {
  return (
    <div className='bg-gray bg-cover border-darkRed border-[5px] sm:border-[25px]'>
      <div className='ml-[20px] sm:ml-[62px] sm:flex'>
        <div>
          <SignUpForm/>
          <img src={downApp} alt="" className='w-[340px] h-[75px] sm:w-[525px] sm:h-[105px]'/>
          <KeyboardSwitcher/>
        </div>
        <div className='sm:ml-[75px]'>
          <p className="text-[#B42A40] text-[180px] sm:text-[460px] font-squartiqa-ultralight">88</p>
          <Zona/>
        </div>
      </div>
    </div>
  )
}