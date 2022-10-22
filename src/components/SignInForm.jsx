import React from 'react'
import axios from 'axios';
import validator from 'validator';

export default function SignInForm() {
  const [logIn, setLogIn] = useState(() => {
    return {
        login: "",
        password: ""
    }
  })

	const changeInputSignIn = event => {
    event.persist()
    setRegister(prev => {
        return {
            ...prev,
            [event.target.name]: event.target.value,
        }
    })
	}

	const submitChackin = event => {
    event.preventDefault();
		if (login=== "dev" && password==="dev123"){
			// тут будет редирект
		}
	}

  return (
    <div className=''>
        <p>Форма входа пользователя киберспортивного клуба</p>
        <form className='flex'>
            <input
						name="login"
						id="login"
						placeholder="Логин"
						value={logIn.login}
						onChange={changeInputSignIn}/>
						<input
						type="password"
						name="password"
						id="password"
						placeholder="Пароль"
						value={logIn.password}
						onChange={changeInputSignIn}/>
      			<div>
							<input
							type="checkbox"
							name="checkbox1"
							id="checkbox1"/>
							<label for="checkbox1">Согласен(а) с правилами посещения комплекса клуба</label>
						</div>
						<div>
							<input
							type="checkbox"
							name="checkbox2"
							id="checkbox2"/>
							<label for="checkbox2">Согласен(а) с политикой обработки персональных данных</label>
						</div>
						<input type="submit"/>
        </form>
    </div>
  )
}
