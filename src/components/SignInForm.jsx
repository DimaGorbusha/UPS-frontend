import React, {useState} from 'react'
import logo from '../img/logo.svg'

export default function SignInForm() {
  const [logIn, setLogIn] = useState(() => {
    return {
        login: "",
        password: ""
    }
  })

	const changeInputSignIn = event => {
    event.persist()
    setLogIn(prev => {
        return {
            ...prev,
            [event.target.name]: event.target.value,
        }
    })
	}

	const submitCheckin = event => {
    event.preventDefault();
		alert("Ну типа вход");
		// Бизнес-логика приложения
	}

  return (
    <div className='pt-[183px]'>
		<img src={logo} alt="" className='w-[459px] h-[194px] mb-[35px]'/>
        <p className='text-[18px] text-[#BEBEBE] font-aeroport-medium mb-[20px]'>Форма входа пользователя киберспортивного клуба</p>
        <form className='flex flex-col'>
			<div className='flex mb-[17px]'>
				<input
					name="login"
					id="login"
					placeholder="Логин"
					value={logIn.login}
					onChange={changeInputSignIn}
					className="w-[324px] h-[56px] font-aeroport-medium bg-bgInput border-[1.68px] border-white text-[18px] mr-[53px]"/>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Пароль"
					value={logIn.password}
					onChange={changeInputSignIn}
					className="w-[324px] h-[56px] font-aeroport-medium bg-bgInput border-[1.68px] border-white text-[18px]"/>
			</div>
      		<div>
				<input
				type="checkbox"
				name="checkbox1"
				id="checkbox1"/>
				<label for="checkbox1" className='text-[16px] text-white font-aeroport-medium mb-[9px]'>Согласен(а) с правилами посещения комплекса клуба</label>
			</div>
			<div className='mb-[30px]'>
			<input
				type="checkbox"
				name="checkbox2"
				id="checkbox2"/>
				<label for="checkbox2" className='text-[16px] text-white font-aeroport-medium '>Согласен(а) с политикой обработки персональных данных</label>
			</div>
			<div className='flex mb-[100px]'>
				<p className='font-squartiqa text-[24px] text-white bg-red pl-[121px] pr-[122px] pt-[26px] pb-[27px] mr-[53px] cursor-pointer' onClick={submitCheckin}>ВХОД</p>
				<a href=''><p className='font-squartiqa text-[24px] text-darkRed pl-[55px] pr-[54px] pt-[26px] pb-[27px] border-darkRed border-[4px]'>РЕГИСТРАЦИЯ</p></a>
			</div>
        </form>
    </div>
  )
}
