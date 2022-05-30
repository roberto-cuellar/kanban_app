import React from 'react'

export const Tarea = ({tarea = '', num = '',handleDelete}) => {
    const handleDragStart = (e)=>{
        console.log('Drag Start')
    }

    const handleDragEnd = (e)=>{
        console.log('Drag End')
    }


  return (
    <div className='tarea' draggable='true' onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <p> {tarea.desc}</p>
        <button
            onClick={() => handleDelete(tarea.id)}
        >
            Borrar
        </button>
    </div>
  )
}
