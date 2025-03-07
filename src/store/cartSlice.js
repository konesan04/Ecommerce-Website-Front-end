import {createSlice} from "@reduxjs/toolkit"

let datafromweb = JSON.parse(localStorage.getItem("cart"))
const cartSlice = createSlice({
    name: "cart",
    initialState : datafromweb,
    reducers : {
        addItem(state, action){
            state.push(action.payload)
            localStorage.setItem("cart",JSON.stringify([...state]))

        },
        removeItem(state, action){
            let newProducts =state.filter(cartProduct => cartProduct.id !== action.payload)
            localStorage.setItem("cart",JSON.stringify([...newProducts]))
            
            return newProducts   
        }
    }
})

export default cartSlice.reducer;

export const {addItem,removeItem} = cartSlice.actions;