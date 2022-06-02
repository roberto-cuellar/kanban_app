

//Reducer de uso general para las 4 cartas (por por Hacer, en proceso, en revisió, y completado )
// Tiene las siguientes acciones:
//  add: Agregar una nueva tarea, actualizando el estado que le envían tras sumarle la misma, que viene en action. payload
//  delete: Eliminar una tarea específica, filtrando del estado anterior, la tarea con id action.payload


export const taskReducer = (state = [],action) => {

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