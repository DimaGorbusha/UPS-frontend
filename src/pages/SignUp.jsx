import React from 'react'
import SignUpForm from '../components/SignUpForm'
import downApp from '../img/downloadApp.png'
import KeyboardSwitcher from '../components/KeyboardSwitcher'
import Zona from '../components/Zona'

export default function SignIn() {
  return (
    <div className='bg-gray bg-cover border-darkRed border-[25px]'>
      <div className='ml-[62px] flex'>
        <div>
          <SignUpForm/>
          <img src={downApp} alt="" className='w-[525px] h-[105px]'/>
          <KeyboardSwitcher/>
        </div>
        <div className='ml-[75px]'>
          <p className="text-[#B42A40] text-[460px] font-squartiqa-ultralight">88</p>
          <Zona/>
        </div>
      </div>
    </div>
  )
}