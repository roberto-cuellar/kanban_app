import React from 'react'

export const Tarea = ({tarea = '', num = '',handleDelete,carta}) => {
    
    const handleDragStart = (e)=>{
        //console.log('Drag Start')
        e.dataTransfer.setData("text/plain", `${e.target.id},${tarea.desc},${carta}`);
    }

    const handleDragEnd = (e)=>{
        const clases = document.elementFromPoint(e.pageX,e.pageY).className; /// Regresa las clases del elemento en la posición específica 
        const clasesVect = clases.split(" ") // Se separan las clases en un array
        const borrar =clasesVect.find((elemento)=> elemento =='draggeable'); 
        if(borrar){/// Si el elemento al que llega tiene la clase draggeable entonces se puede soltar el elemento allí    
            const actual =clasesVect.find((elemento)=> elemento == carta); /// Si el elemento en el que se pretende soltar el elemento es el mismo, no se realiza nada.
            if(!actual){
                handleDelete(tarea.id);
            }
        } 
    }

    const  handleDragOver = (event) => { /// Para poder trabajar con el Drop, se debe prevenir el comportamiento por defecto del DragOver
        event.preventDefault();
    }

  return (
    
    <div className={`tarea draggeable ${carta}`} id={tarea.id} value={carta} draggable='true' onDragStart={(e)=>handleDragStart(e)} onDragEnd={handleDragEnd} onDragOver={(e)=> handleDragOver(e)} >
        <p className={`draggeable ${carta}`}> {tarea.desc}</p>
        <button
            className={`draggeable ${carta}`}
            onClick={() => handleDelete(tarea.id)}
        >
            Borrar
        </button>
       
    </div>
  )
}
