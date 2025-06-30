import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button({btnCntnt, btnClass, routeTo, btnType}) {
    const navigate = useNavigate()
;  return (
     <button className={`cursor-pointer bg-cyan-950 hover:bg-cyan-600 text-white transition-all duration-300 ease-in-out rounded-sm ${btnClass}`} type={btnType} onClick={() => navigate(`${routeTo}`)}>{btnCntnt}</button>
  )
}

export default Button;
