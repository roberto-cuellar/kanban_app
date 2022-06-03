import React, { useEffect, useReducer, useState } from 'react'
import { tablerosReducer } from '../reducers/tablerosReducer';
import { CartaCompletado } from './CartaCompletado';
import { CartaEnProceso } from './CartaEnProceso'
import { CartaEnRevision } from './CartaEnRevision';
import { CartaPorHacer } from './CartaPorHacer'
import {Grid,Typography,FormControl,Input} from '@mui/material';

import { Container,Card,CardContent,Button,ButtonGroup } from '@mui/material';

const initialState = [{
  id: new Date().getTime(),
  tablero: "general",
}]

const init = () =>{
  return JSON.parse(localStorage.getItem('tableros'))||[];
}

export const Tableros = () => { //Este componente  se encarga de posicionar los subcomponentes de cartas por hacer, en proceso, en revisión y finalizado
  
  !localStorage.getItem('tableros')&& localStorage.setItem('tableros',JSON.stringify(initialState));
  const initial = JSON.parse(localStorage.getItem('tableros'));
  const [descripcion, setDescripcion] = useState(""); // Estado para el almacenamiento del nombre del tablero a agregar en la página de tableros
  // const [tableros, dispatch] = useReducer(tablerosReducer, initialState,init); /// Reducer para la manipulación de los tableros
  const [tableros, dispatch] = useReducer(tablerosReducer, initial); /// Reducer para la manipulación de los tableros
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

  const handleDelete = (tableroId,tableroName)=>{ /// Función para borrar el almacenamiento de cierto tablero
    const action = {
        type: 'delete',
        payload: tableroId
    }
    dispatch(action);
    localStorage.removeItem(tableroName+'porhacer');
    localStorage.removeItem(tableroName+'enproceso');
    localStorage.removeItem(tableroName+'enrevision');
    localStorage.removeItem(tableroName+'completado');
    setTablero('general');
  }
  

  const handleClick = (e) =>{
    setTablero(e);
  }

  const handleClean = (tableroName) =>{ /// Función para borrar el contenido de los tableros, pero no el tablero
    localStorage.removeItem(tableroName+'porhacer');
    localStorage.removeItem(tableroName+'enproceso');
    localStorage.removeItem(tableroName+'enrevision');
    localStorage.removeItem(tableroName+'completado');
    const action = {
      type: '',
      payload: []
    }
    dispatch(action); /// Se entrega al reducer para la actualización
    setTablero(tableroName);
  }


  return (
    <Grid container spacing={0} >
      <Grid item xs={12}>
        <Typography variant="h4">Tableros</Typography>
      </Grid>
      <Grid item xs={3} sx={{ mb: 1}} >
        <form onSubmit={handleSubmit} className=''>
        <Input 
          type='text' 
          name='descripcion' 
          placeholder='Agregar Tablero' 
          autoComplete='off'
          value={descripcion}
          onChange={handleInputChange}
        />
        {/* <button type='submit'>Agregar <span>+</span></button> */}
        <Button type='submit'>Agregar +</Button>
      </form>
      </Grid>
      <Grid item xs={5}>
      {        
       tableros.map((element)=>{
         return(
           <ButtonGroup variant="text" aria-label="outlined primary button group" > 

              <Button variant="outlined" key={element.id} className='tablerosList' onClick={()=>handleClick(element.tablero)}>{element.tablero}</Button>
              {(element.tablero!='general')&&<Button
                  variant="outlined"
                  color="error"
                  key = {element.id+11}
                  className='deleteTablero'
                  onClick={() => handleDelete(element.id,element.tablero)}
              >
                  x
              </Button>}
            </ButtonGroup>
         )
       }) 
      }      
      </Grid>
      {/* <button onClick={()=>handleClean(tablero)}>Limpiar</button>  */}
      <Grid container spacing={1} className='cartasEstados'>
        <Grid item xs={3}>
          <CartaPorHacer tablero={tablero}/>        
        </Grid>
        <Grid item xs={3}>
          <CartaEnProceso tablero={tablero}/>         
        </Grid>
        <Grid item xs={3}>
          <CartaEnRevision tablero={tablero}/>     
        </Grid>
        <Grid item xs={3}>
          <CartaCompletado tablero={tablero}/>    
        </Grid>
            
            
            
            
      </Grid>
      
    </Grid>
  )
}
