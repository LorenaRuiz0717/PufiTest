import { createStore } from "redux"

const initialState={
    products:[{
        id:1,
        name:'Leche',
        Fecha:23
    },
    {
        id:2,
        name:'Umbrella',
        Fecha:22
    }
    ],
    usuarios:[]
}
const reducerProducts=( state = initialState, action)=>{
    return state
}

export default createStore(reducerProducts)