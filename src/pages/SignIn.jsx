import React from 'react'
import SignInForm from '../components/SignInForm'
import downApp from '../img/downloadApp.png'
import KeyboardSwitcher from '../components/KeyboardSwitcher'
import Zona from '../components/Zona'

export default function SignIn() {
  return (
    <div className='bg-gray border-[#B42A40] border-[33px]'>
      <div className='ml-[82px] flex'>
        <div>
          <SignInForm/>
          <img src={downApp} alt="" />
          <KeyboardSwitcher/>
        </div>
        <div>
          <p className="text-[#B42A40] text-[595px] font-squartiqa-ultralight">88</p>
          <Zona/>
        </div>
      </div>
    </div>
  )
}
