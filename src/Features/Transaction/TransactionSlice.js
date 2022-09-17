import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getTransaction, addTransaction, deleteTransaction, editTransaction} from './TransactionApi'


const initialState = {
    transactions : [],
    isLoading: false,
    isError: false,
    error:'',
    editing:{}
}

export const fetchTransactions = createAsyncThunk("transactions/fetchTransactions", 
async()=> {
    const transactions = await getTransaction();
    return transactions; 
}) 
export const createTransaction = createAsyncThunk("transactions/createTransaction",
 async(data)=> {
    const transaction = await addTransaction(data);
    return transaction; 
}) 
export const changeTransaction = createAsyncThunk("transactions/changeTransaction",
 async({id, data})=> {
    const transaction = await editTransaction(id, data);
    return transaction; 
}) 
export const removeTransaction = createAsyncThunk("transactions/removeTransaction",
 async(id)=> {
    const transaction = await deleteTransaction(id);
    return transaction; 
}) 


//create slice

const transactionSlice = createSlice({
    name:"transaction",
    initialState,
    reducers:{
        editActive: (state, action) => {
            state.editing = action.payload;
        },
        editInActive: (state) => {
            state.editing = {};
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTransactions.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true
        })
        .addCase(fetchTransactions.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.transactions = action.payload
        })
        .addCase(fetchTransactions.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.transactions = [];
            state.error = action.error?.message
        })
        .addCase(createTransaction.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(createTransaction.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.transactions.push(action.payload)
        })
        .addCase(createTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message
        })
        .addCase(changeTransaction.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(changeTransaction.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            
            const indexToUpdate = state.transactions.findIndex( t => t.id === action.payload.id)
            state.transactions[indexToUpdate] = action.payload
        })
        .addCase(changeTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message
        })
        .addCase(removeTransaction.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(removeTransaction.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            
            state.transactions = state.transactions.filter(t => t.id !== action.meta.arg)
        })
        .addCase(removeTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message
        })
    }
})

export default transactionSlice.reducer;
export const {editActive, aditInActive} = transactionSlice.actions;
