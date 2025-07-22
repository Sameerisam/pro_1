import { configureStore } from "@reduxjs/toolkit";
import { transactionReducer } from "./reducer/transaction";

export let store=configureStore({
    reducer:{
transaction:transactionReducer.reducer
    }
    
})