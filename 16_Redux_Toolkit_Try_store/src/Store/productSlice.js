import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts",
        async()=>{
             const res = await fetch("https://dummyjson.com/products");
             const data = await res.json();
            return data.products;
        }
)

const initialState = {
    ids: [],
    entities: {},
    loading:false,
    error:null
}

export const productslice = createSlice({
    name:"productslice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            action.payload.forEach(product=>{
                state.entities[product.id] = product;
                if(!state.ids.includes(product.id)){
                    state.ids.push(product.id);
                }
            })
            
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            console.log("action error : ",action);
            state.loading =false;
            state.error = action.error.message
        })
    }
})


export default productslice.reducer;