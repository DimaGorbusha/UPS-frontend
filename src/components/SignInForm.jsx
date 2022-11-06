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
    <div className='pt-[48px]'>
		<img src={logo} alt="" className='w-[344px] h-[182px] mb-[16px]'/>
        <p className='text-[16px] text-[#BEBEBE] font-aeroport-medium mb-[18px]'>Форма входа пользователя киберспортивного клуба</p>
        <form className='flex flex-col'>
			<div className='flex mb-[15px]'>
				<input
					name="login"
					id="login"
					placeholder="Логин"
					value={logIn.login}
					onChange={changeInputSignIn}
					className="w-[243px] h-[53px] font-aeroport-medium bg-bgInput border-[1.68px] border-white text-[16px] mr-[30px]"/>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Пароль"
					value={logIn.password}
					onChange={changeInputSignIn}
					className="w-[243px] h-[53px] font-aeroport-medium bg-bgInput border-[1.68px] border-white text-[16px]"/>
			</div>
      		<div>
				<input
				type="checkbox"
				name="checkbox1"
				id="checkbox1"/>
				<label for="checkbox1" className='text-[14px] text-white font-aeroport-medium mb-[8px]'>Согласен(а) с правилами посещения комплекса клуба</label>
			</div>
			<div className='mb-[15px]'>
			<input
				type="checkbox"
				name="checkbox2"
				id="checkbox2"/>
				<label for="checkbox2" className='text-[14px] text-white font-aeroport-medium '>Согласен(а) с политикой обработки персональных данных</label>
			</div>
			<div className='flex mb-[20px]'>
				<p className='font-squartiqa text-[20px] text-white bg-red px-[80px] bg-cover py-[10px] h-[60px] w-[243px] mr-[40px] cursor-pointer' onClick={submitCheckin}>ВХОД</p>
				<p className='py-[15px] px-[35px] border-darkRed border-[4px] h-[60px] w-[243px] font-squartiqa text-[20px] text-darkRed'><a href=''>РЕГИСТРАЦИЯ</a></p>
			</div>
        </form>
    </div>
  )
}
