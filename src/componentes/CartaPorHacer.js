import React, { useState,useReducer, useEffect } from 'react'
import { Tarea } from './Tarea';
import { taskReducer } from '../reducers/taskReducer';

const init = () =>{
    return JSON.parse(localStorage.getItem('porHacer')) || [];
}


export const CartaPorHacer = () => {
    const [descripcion, setDescripcion] = useState(""); // Estado para el almacenamiento de la descripción de la tarea a agregar por Hacer    
    const [porHacer, dispatch] = useReducer(taskReducer, [],init); /// Reducer para la manipulación de los por hacer
    // const [porHacer, dispatch] = useReducer(porHacerReducer, [],init); /// Reducer para la manipulación de los por hacer
    
    useEffect(()=>{
        localStorage.setItem('porHacer',JSON.stringify(porHacer)); /// Solo actualiza el local storage si y solo sí, hay un cambio en el reducer, es decir, si se eliminó o agregó una nueva tarea
    },[porHacer])

    const handleInputChange = (e) =>{ // Cambio del estado descripción del estado por Hacer
        setDescripcion(e.target.value);
    }

    const handleSubmit = (e) =>{ /// Evento submit del form
        e.preventDefault();
        if(descripcion.trim().length <=1 ){
            return;
        }

        const nuevoPorHacer = { ///  Estructura del nuevo Por Hacer
            id: new Date().getTime(),
            desc: descripcion,
            estado: 'por hacer'
        }

        const accion = {
            type: 'add',
            payload: nuevoPorHacer
        }
        dispatch(accion); /// Se entrega al reducer para la actualización
        setDescripcion(""); // Se actualiza el estado del formulario
    }

    const handleDelete = (todoId)=>{
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

  const  handleDragOver = (event) => { /// Para poder trabajar con el Drop, se debe prevenir el comportamiento por defecto del DragOver
    event.preventDefault();
  }

    
  const handleDrop = (e) =>{ /// Evento de drop 
    const origen = e.dataTransfer.getData("text").split(",");

    ///Dispatch
    if(origen[2]!=='porhacer'){
      const nuevoPorHacer = { ///  Estructura del nuevo por Hacer
        id: origen[0],
        desc: origen[1],
        estado: 'por hacer'
    }

    const accion = {
        type: 'add',
        payload: nuevoPorHacer
    }
      dispatch(accion); /// Se entrega al reducer para la actualización
      setDescripcion(""); // Se actualiza el estado del formulario
      e.dataTransfer.setData("text/plain", "porhacer");
  }

  }

  return (
    /// Carta Por Hacer
    <>
    
    <div className='cartaEstado draggeable porhacer' id='porHacerContainer' onDrop={(e)=>handleDrop(e)} onDragOver={(e)=> handleDragOver(e)} >
      <p className='cartaTitulo draggeable porhacer'>Por Hacer : {porHacer.length}</p>
        {
            porHacer.map((item,i)=>{
                return(
                    <Tarea key={item.id} tarea={item} num={i} handleDelete ={handleDelete} carta="porhacer" />
                )
        })
        }

      <form onSubmit={handleSubmit} className=' draggeable porhacer'>
        <input 
          type='text' 
          name='descripcion' 
          placeholder='Tarea a agregar' 
          autoComplete='off'
          value={descripcion}
          onChange={handleInputChange}
        />
        <button type='submit'>Agregar <span>+</span></button>
      </form>      
    </div>
        
    </>
    


  )
}
