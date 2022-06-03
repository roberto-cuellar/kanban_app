import React, { useEffect, useReducer, useState } from 'react'
import { tablerosReducer } from '../reducers/tablerosReducer';
import { CartaCompletado } from './CartaCompletado';
import { CartaEnProceso } from './CartaEnProceso'
import { CartaEnRevision } from './CartaEnRevision';
import { CartaPorHacer } from './CartaPorHacer'

const initialState = [{
  id: new Date().getTime(),
  tablero: "general",
}]

const init = () =>{
  return JSON.parse(localStorage.getItem('tableros'))||[];
}

export const Tableros = () => { //Este componente  se encarga de posicionar los subcomponentes de cartas por hacer, en proceso, en revisión y finalizado
    
  const [descripcion, setDescripcion] = useState(""); // Estado para el almacenamiento del nombre del tablero a agregar en la página de tableros
  const [tableros, dispatch] = useReducer(tablerosReducer, initialState,init); /// Reducer para la manipulación de los tableros
  const [tablero,setTablero] = useState("general");

  const handleInputChange = (e) =>{ // Cambio del estado descripcion para el nombre del tablero a crear 
    setDescripcion(e.target.value);
  }

  useEffect(()=>{

    localStorage.setItem('tableros',JSON.stringify(tableros)); /// Solo actualiza el local storage si y solo sí, hay un cambio en el reducer, es decir, si se eliminó o agregó un nuevo tablero
    // localStorage.setItem(tablero+'porhacer',JSON.stringify([]));
    
  },[tableros])


  // useEffect(()=>{
  //   localStorage.setItem(tablero+'porhacer',JSON.stringify([]));
  // },[tablero])

  const handleSubmit = (e) =>{ /// Evento submit del form
    e.preventDefault();
    if(descripcion.trim().length <=1 ){
        return;
  }

    const nuevoTablero = { ///  Estructura del nuevo Por Hacer
        id: new Date().getTime(),
        tablero: descripcion,
    }

    const accion = {
        type: 'add',
        payload: nuevoTablero
    }
    dispatch(accion); /// Se entrega al reducer para la actualización
    // localStorage.setItem(tablero+'porhacer',JSON.stringify([]));
    setTablero(descripcion);
    setDescripcion(""); // Se actualiza el estado del formulario
}

  const handleDelete = (tableroId)=>{
    const action = {
        type: 'delete',
        payload: tableroId
    }
    dispatch(action);
  }

  const handleClick = (e) =>{
    setTablero(e);
  }


  return (
    <div className='tableros'>
        <h1> Tableros</h1>
        <form onSubmit={handleSubmit} className=''>
        <input 
          type='text' 
          name='descripcion' 
          placeholder='Agregar Tablero' 
          autoComplete='off'
          value={descripcion}
          onChange={handleInputChange}
        />
        <button type='submit'>Agregar <span>+</span></button>
      </form>
      {
       tableros.map((element)=>{
         return(
           <>
              <button key={element.id} className='tablerosList' onClick={()=>handleClick(element.tablero)}>{element.tablero}</button>
              {/* <button
                  className='deleteTablero'
                  onClick={() => handleDelete(element.id)}
              >
                  x
              </button> */}
            </>
         )
       }) 
      }
      <br/>
      <h4>{tablero}</h4>
      <div className='cartasEstados'>
          <CartaPorHacer tablero={tablero}/> 
          <CartaEnProceso tablero={tablero}/>        
          <CartaEnRevision tablero={tablero}/>     
          <CartaCompletado tablero={tablero}/>    
      </div>
      
    </div>
  )
}
