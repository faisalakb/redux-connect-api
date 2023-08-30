import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos= createAsyncThunk('fetchTodos',async()=>{
    console.log('action fetchtodos calling');
    const response= await fetch("https://randomuser.me/api/?results=5");
    return response.json();

})

const userSlice = createSlice({
    name:"user",
    initialState:{
    isLoading:false,
    data:[],
    isError:false},
    extraReducers: (builder)=>{

        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data = action.payload;
        })
        builder.addCase(fetchTodos.rejected,(state,action)=>{
            console.log('Error is',action.payload)
            state.isError=true;
        })

    }
})

export default userSlice.reducer
