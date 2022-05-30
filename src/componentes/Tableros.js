import React from 'react'
import { CartaEnProceso } from './CartaEnProceso'
import { CartaPorHacer } from './CartaPorHacer'

export const Tableros = () => {
    
  return (
    <div className='tableros'>
        <h1> Tableros</h1>
        <div className='cartasEstados'>
            <CartaPorHacer />
            <CartaEnProceso />        
        </div>
        
    </div>
  )
}
