

//Reducer de uso general para la pantalla tableros 
// Tiene las siguientes acciones:
//  add: Agregar un nuevo tablero, actualizando el estado que le envían tras sumarle la misma, que viene en action. payload
//  delete: Eliminar un tablero específico, filtrando del estado anterior, el tablero con id action.payload


export const tablerosReducer = (state = [],action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        
        case 'delete':
            return state.filter(todo => todo.id !== action.payload)
        
        // case 'toggle':
        //     return state.map( todo => {
        //         if(todo.id === action.payload){
        //             return {
        //                 ...todo,done: !todo.done
        //             }
        //         }else{
        //             return todo;
        //         }
        //     })
        
        default:
            return state;
    }
}