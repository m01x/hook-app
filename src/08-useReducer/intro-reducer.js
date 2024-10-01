//Tenemos un estado... de un TodoList
const initialState = [{
    id:1,
    todo:'Recolectar la piedra del Alma',
    done:false
}];

//Nuestro reducer.... recive un estado y la accion, y retorna un nuevo estado a raiz de lo ejecutado.
const todoReducer = ( state = initialState , action = {}) => {

    if(action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }
    return state;  
}


let todos = todoReducer();

//Queremos que sea nuestro nuevo estado
const newTodo = {
    id:2,
    todo:'Recolectar la piedra del Poder',
    done:false
}

//Creamos la acción
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}


todos = todoReducer(todos, addTodoAction)
console.log(todos);
