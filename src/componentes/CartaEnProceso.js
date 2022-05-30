import React, { useState,useReducer, useEffect } from 'react'
import { porHacerReducer } from '../reducers/porHacerReducer';
import { enProcesoReducer } from '../reducers/enProcesoReducer';
import { Tarea } from './Tarea';

export const CartaEnProceso = () => {
    const [descripcion, setDescripcion] = useState(""); // Estado para el almacenamiento de la descripción de la tarea a agregar por Hacer    
    const [porHacer, dispatch] = useReducer(porHacerReducer, []); /// Reducer para la manipulación de los por hacer
    
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





  return (
    /// Carta En Proceso
    <>
    
    <div className='cartaEstado'>
      <p className='cartaTitulo'>En Proceso : {porHacer.length}</p>
        {
            porHacer.map((item,i)=>{
                return(
                    <Tarea key={item.id} tarea={item} num={i} handleDelete ={handleDelete} />
                )
        })
        }

      <form onSubmit={handleSubmit}>
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
