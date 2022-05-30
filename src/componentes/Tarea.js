import React from 'react'

export const Tarea = ({tarea = '', num = '',handleDelete}) => {
    
  return (
    <div className='tarea'>
        <p>{num+1}. {tarea.desc}</p>
        <button
            onClick={() => handleDelete(tarea.id)}
        >
            Borrar
        </button>
    </div>
  )
}
