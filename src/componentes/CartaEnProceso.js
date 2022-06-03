import React, { useState,useReducer, useEffect } from 'react'
import { Tarea } from './Tarea';
import { taskReducer } from '../reducers/taskReducer';

const init = () =>{
    return JSON.parse(localStorage.getItem('enProceso')) || [];
}


export const CartaEnProceso = () => {
    const [descripcion, setDescripcion] = useState(""); // Estado para el almacenamiento de la descripción de la tarea a agregar En proceso
    const [enProceso, dispatch] = useReducer(taskReducer, [],init); /// Reducer para la manipulación de los en proceso
    
    useEffect(()=>{
        localStorage.setItem('enProceso',JSON.stringify(enProceso)); /// Solo actualiza el local storage si y solo sí, hay un cambio en el reducer, es decir, si se eliminó o agregó una nueva tarea en En Proceso
    },[enProceso])

    const handleInputChange = (e) =>{ // Cambio del estado descripción del estado En Proceso
        setDescripcion(e.target.value);
    }

    const handleSubmit = (e) =>{ /// Evento submit del form
        e.preventDefault();
        if(descripcion.trim().length <=1 ){
            return;
        }

        const nuevoEnProceso = { ///  Estructura del nuevo En Proceso
            id: new Date().getTime(),
            desc: descripcion,
            estado: 'por hacer'
        }

        const accion = {
            type: 'add',
            payload: nuevoEnProceso
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
      // console.log('Origen :', origen)

      ///Dispatch
      if(origen[2]!=='enproceso'){
        const nuevoEnProceso = { ///  Estructura del nuevo En Proceso
          id: origen[0],
          desc: origen[1],
          estado: 'en proceso'
      }

      const accion = {
          type: 'add',
          payload: nuevoEnProceso
      }
        dispatch(accion); /// Se entrega al reducer para la actualización
        setDescripcion(""); // Se actualiza el estado del formulario
    }

    }
    

  return (
    /// Carta Por Hacer
    <>
    
    <div className='cartaEstado  draggeable enproceso' id='enProcesoContainer' value='enproceo' onDrop={(e)=>handleDrop(e)} onDragOver={(e)=> handleDragOver(e)}>
      <p className='cartaTitulo  draggeable  enproceso'>En Proceso : {enProceso.length}</p>
        {
            enProceso.map((item,i)=>{
                return(
                    <Tarea key={item.id} tarea={item} num={i} handleDelete ={handleDelete} carta={'enproceso'} />
                )
        })
        }

      <form onSubmit={handleSubmit}  className= 'draggeable enproceso'>
        <input 
          type='text' 
          name='descripcion' 
          placeholder='Agregar "En Proceso"' 
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