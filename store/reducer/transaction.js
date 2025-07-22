import { createSlice } from "@reduxjs/toolkit";



export let transactionReducer=createSlice({
    name:"userTransaction",
    initialState:{
        currentTransaction:[],
    },
    reducers:{
        addTransaction(oldData,newData){
            oldData.currentTransaction.push(newData.payload)
            console.log(newData)
        },
        removeTransaction(oldData,newData){
            oldData.currentTransaction.splice(newData.payload,1)
        }
    }
})
export let{addTransaction,removeTransaction}=transactionReducer.actions;