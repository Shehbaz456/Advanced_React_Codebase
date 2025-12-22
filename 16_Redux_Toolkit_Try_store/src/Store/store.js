import { configureStore } from '@reduxjs/toolkit'
import CartReducer from "./slice"
import ProductReducer from "./productSlice"
let store = configureStore({
    reducer :{
        cart:CartReducer,
        products:ProductReducer
    }
})

export default store;