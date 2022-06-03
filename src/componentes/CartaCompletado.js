import React, { useState,useReducer, useEffect } from 'react'
import { Tarea } from './Tarea';
import { taskReducer } from '../reducers/taskReducer';

export const CartaCompletado = ({tablero}) => {
    !localStorage.getItem(tablero+'completado')&& localStorage.setItem(tablero+'completado',JSON.stringify([]));
    const initial = JSON.parse(localStorage.getItem(tablero+'completado'));
    const [descripcion, setDescripcion] = useState(""); // Estado para el almacenamiento de la descripción de la tarea a agregar por Hacer    
    const [completado, dispatch] = useReducer(taskReducer, initial); /// Reducer para la manipulación de los por hacer        
    useEffect(()=>{
      /// Se pone en ceros el reducer
      const accion = {
        type: 'init',
        payload: []
    }
    dispatch(accion); /// Se entrega al reducer para la actualización
    // Se verifica si existe el almacenamiento, en caso de que no exista, se crea
    !localStorage.getItem(tablero+'completado')&& localStorage.setItem(tablero+'completado',JSON.stringify([]));
    // Se recuperan los datos
    const datos = JSON.parse(localStorage.getItem(tablero+'completado'));
    // Se hace el dispatch para cada elemento y así restaurar el la lista del componente
    datos.forEach(element => {
      const accion = {
        type: 'add',
        payload: element,
        estado: 'por hacer'
    }
    dispatch(accion)
    });  
      // localStorage.setItem(tablero+'porhacer',JSON.stringify(porHacer)); 
    },[tablero])
    
    useEffect(()=>{
      localStorage.setItem(tablero+'completado',JSON.stringify(completado)); /// Solo actualiza el local storage si y solo sí, hay un cambio en el reducer, es decir, si se eliminó o agregó una nueva tarea
    },[completado])

  
    const handleInputChange = (e) =>{ // Cambio del estado descripción del estado por Hacer
        setDescripcion(e.target.value);
    }

    const handleSubmit = (e) =>{ /// Evento submit del form
        e.preventDefault();
        if(descripcion.trim().length <=1 ){
            return;
        }

        const nuevoCompletado = { ///  Estructura del nuevo Por Hacer
            id: new Date().getTime(),
            desc: descripcion,
            estado: 'por hacer'
        }

        const accion = {
            type: 'add',
            payload: nuevoCompletado
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
    if(origen[2]!=='completado'){
      const nuevoCompletado = { ///  Estructura del nuevo por Hacer
        id: origen[0],
        desc: origen[1],
        estado: 'por hacer'
    }

    const accion = {
        type: 'add',
        payload: nuevoCompletado
    }
      dispatch(accion); /// Se entrega al reducer para la actualización
      setDescripcion(""); // Se actualiza el estado del formulario
      e.dataTransfer.setData("text/plain", "completado");
  }

  }

  return (
    /// Carta Por Hacer
    <>
    
    <div className='cartaEstado draggeable completado' id='completadoContainer' onDrop={(e)=>handleDrop(e)} onDragOver={(e)=> handleDragOver(e)} >
      <p className='cartaTitulo draggeable completado'>Completados : {completado.length}</p>
        {
            completado.map((item,i)=>{
                return(
                    <Tarea key={item.id} tarea={item} num={i} handleDelete ={handleDelete} carta="completado" />
                )
        })
        }

      <form onSubmit={handleSubmit} className=' draggeable completado'>
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
