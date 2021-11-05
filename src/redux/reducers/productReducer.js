import {ActionTypes} from '../contants/action-types'


const intialState={
    products:[
        {
            id:1,
            title:"Mahin",
            category:"Programer"
        }
    ]
}
export const productReducer=(state=intialState,{type,payload})=>{
        switch (type) {
            case ActionTypes.SELECTED_PRODUCT:
                return state
            default:
                return state;
        }
}