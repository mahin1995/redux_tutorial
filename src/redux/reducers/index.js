import {combineReducers} from 'redux'
import {productReducer,selectdeProductReducer} from './productReducer'


export  const reducers=combineReducers({
    allProducts:productReducer,
    product:selectdeProductReducer

})

// export default reducers