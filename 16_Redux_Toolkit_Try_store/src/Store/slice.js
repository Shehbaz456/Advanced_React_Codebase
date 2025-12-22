import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        list : localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
        prodCount: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0
    }

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            let product = action.payload
            const isItemExist = state.list.find(item=>item.id === product.id);
            console.log("isItemExist : ",isItemExist);
            
            if(isItemExist){
                isItemExist.qty +=1;
            }else{
                state.list.push({...product,qty:1});
                state.prodCount+=1;
            }
            localStorage.setItem("cart",JSON.stringify(state.list));
        },
        clearCartItem:(state)=>{
            state.list=[];
            state.prodCount=0
            localStorage.removeItem("cart");
        },
        incrementQty:(state,action)=>{
            let Item = state.list.find(item=>item.id === action.payload );
            if(Item) Item.qty+=1;
            localStorage.setItem("cart",JSON.stringify(state.list));
        },
        decrementQty:(state,action)=>{
            let id = action.payload;
            let Item = state.list.find(item=>item.id === id );
            if( Item && Item.qty>1) Item.qty -=1;  
            localStorage.setItem("cart",JSON.stringify(state.list));
        },
        removeCart:(state,action)=>{
            const id = action.payload;
            state.list = state.list.filter(item=>item.id !== id)
            state.prodCount -=1
            localStorage.setItem("cart",JSON.stringify(state.list))
        }
    }
})

export const { addItem,clearCartItem,removeCart,incrementQty,decrementQty } = cartSlice.actions;
export default cartSlice.reducer; 
