import React from 'react'
import { CartaPorHacer } from './CartaPorHacer'

export const Tableros = () => {
    
  return (
    <div className='tableros'>
        <h1> Tableros</h1>
        <div className='cartasEstados'>
            <CartaPorHacer />        
        </div>
        
    </div>
  )
}
