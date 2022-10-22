import React from 'react'

export default function SignUpForm() {
    const [signUp, setSignUp] = useState(() => {
        return {
            login: "",
            password: "",
            name:"",
            password2: "",
            email: "",
            phone_number: ""
        }
      })
    
        const changeInputSignUp = event => {
        event.persist()
        setSignUp(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
        }
    
        const submitCheckin = event => {
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
                    onChange={changeInputSignUp}/>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Пароль"
                    value={logIn.password}
                    onChange={changeInputSignUp}/>
                <input
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="Подтверждение пароля"
                    value={logIn.password2}
                    onChange={changeInputSignUp}/>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="ФИО"
                    value={logIn.name}
                    onChange={changeInputSignUp}/>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={logIn.email}
                    onChange={changeInputSignUp}/>
                <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="8 (777) 777 - 77 - 77"
                    value={logIn.phone_number}
                    onChange={changeInputSignUp}/>
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
