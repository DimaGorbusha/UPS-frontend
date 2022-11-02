import React from 'react'
import SignInForm from '../components/SignInForm'
import downApp from '../img/downloadApp.png'
import KeyboardSwitcher from '../components/KeyboardSwitcher'

export default function SignIn() {
  return (
    <div className='bg-[#0E1921]'>
        <SignInForm/>
        <img src={downApp} alt="" />
        <KeyboardSwitcher/>
    </div>
  )
}
