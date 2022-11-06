import React, {useState} from 'react'
import logo from '../img/logo.svg'
import star from '../img/star.svg'
import starOrange from '../img/starOrange.svg'

export default function SignUpForm() {
    const [logIn, setLogIn] = useState(() => {
        return {
            login: "",
            password: ""
        }
      })

        const changeInputSignUp = event => {
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
		alert("Регистрация");
            // if (login=== "dev" && password==="dev123"){
            //     // тут будет редирект
            // }
        }
    
      return (
        <div className='pt-[48px]'>
		<img src={logo} alt="" className='w-[344px] h-[182px] mb-[16px]'/>
        <p className='text-[16px] text-[#BEBEBE] font-aeroport-medium mb-[18px]'>Форма входа пользователя киберспортивного клуба</p>
        <form className='flex flex-col'>
			<div className='sm:flex mb-[10px]'>
				<div className='flex'>
				<input
					name="login"
					id="login"
					placeholder="Логин"
					value={logIn.login}
					onChange={changeInputSignUp}
					className="w-[243px] h-[53px] font-aeroport-medium bg-bgInput border-[1.68px] border-white text-[16px] mb-[10px] sm:mb-0 mr-[5px]"/>
                    <img src={star} alt="" className='mr-[30px]'/>
				</div>
				<div className='flex'>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="ФИО"
					value={logIn.password}
					onChange={changeInputSignUp}
					className="w-[243px] h-[53px] font-aeroport-medium bg-bgInput border-[1.68px] border-white text-[16px] mr-[5px]"/>
                    <img src={star} alt="" className=''/>
				</div>
			</div>
            <div className='sm:flex mb-[10px]'>
				<div className='flex'>
				<input
					name="pass"
					id="pass"
					placeholder="Пароль"
					value={logIn.login}
					onChange={changeInputSignUp}
					className="w-[243px] h-[53px] font-aeroport-medium bg-bgInput border-[1.68px] border-white text-[16px] mb-[10px] sm:mb-0 mr-[5px]"/>
                    <img src={star} alt="" className='mr-[30px]'/>
				</div>
				<div className='flex'>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Подтверждение пароля"
					value={logIn.password}
					onChange={changeInputSignUp}
					className="w-[243px] h-[53px] font-aeroport-medium bg-bgInput border-[1.68px] border-white text-[16px] mr-[5px]"/>
                    <img src={star} alt="" className=''/>
				</div>
			</div>
            <div className='sm:flex mb-[10px]'>
				<input
					name="phone"
					id="phone"
					placeholder="8 (777) 777 - 77 - 77"
					value={logIn.login}
					onChange={changeInputSignUp}
					className="w-[243px] h-[53px] font-aeroport-medium bg-bgInput border-[1.68px] border-white text-[16px] mb-[10px] sm:mb-0 mr-[46px]"/>
				<div className='flex'>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					value={logIn.password}
					onChange={changeInputSignUp}
					className="w-[243px] h-[53px] font-aeroport-medium bg-bgInput border-[1.68px] border-white text-[16px] mr-[5px]"/>
                    <img src={star} alt="" className=''/>
				</div>
			</div>
            <div className='flex'>
                <img src={starOrange} alt="" />
                <p className='ml-[5px] text-[14px] text-[#CA7B34] font-aeroport-medium'>Обязательное поле</p>
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
			<div className='sm:flex mb-[20px]'>
				<p className='font-squartiqa text-[20px] text-white bg-red px-[80px] bg-cover py-[10px] h-[60px] w-[243px] mr-[40px] sm:mr-[40px] mb-[10px] sm:mb-0 cursor-pointer'><a href='/signin'>ВХОД</a></p>
				<p className='py-[15px] px-[35px] border-darkRed border-[4px] h-[60px] w-[243px] font-squartiqa text-[20px] text-darkRed' onClick={submitCheckin}>РЕГИСТРАЦИЯ</p>
			</div>
        </form>
    </div>
  )
}
