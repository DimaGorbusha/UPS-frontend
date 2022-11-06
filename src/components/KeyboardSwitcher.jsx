import React from 'react'
import flags from "../img/flags.png"
import lang_switcher from "../img/lang_switcher.png"

export default function KeyboardSwitcher() {
  return (
    <div className='mt-[32px]'>
        <h2 className='text-white text-[24px] font-aeroport'>Раскладка клавиатуры</h2>
        <img src={flags} alt="" className='mt-[5px]'/>
        <div className='flex'>
          <p className='font-aeroport text-[18px] text-[#5C5C5C] mr-[10px]'>
          *Для смены раскладки ввода<br/>
          языка нажмите комбинацию клавиш
          </p>
          <img src={lang_switcher} alt="" className='w-[140px] h-[38px]'/>
        </div>
    </div>
  )
}
