import React from 'react'
import { Calendario } from './Calendario'
import { Configuracion } from './Configuracion'
import { Mensajes } from './Mensajes'
import { Perfil } from './Perfil'
import { Reportes } from './Reportes'
import { Tableros } from './Tableros'

export const WorkSpace = ({screen='Tableros'}) => {
    /// Screens disponibles para el área de trabajo
    /// Se verifica la pantalla entrante para proseguir a renderizar el componente seleccionado
    

  return (
    <div className='workSpace'>
            {(screen == 'Tableros')&&<Tableros />}
            {(screen == 'Calendario')&&<Calendario />}
            {(screen == 'Configuracion')&&<Configuracion />}
            {(screen == 'Perfil')&&<Perfil />}
            {(screen == 'Mensajes')&&<Mensajes />}
            {(screen == 'Reportes')&&<Reportes />}
    </div>
  )
}
