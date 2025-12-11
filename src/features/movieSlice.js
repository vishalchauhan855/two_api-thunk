import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Component/Api";
import { act } from "react";

export const addMovie=createAsyncThunk('/addMovie',async(data)=>{
    const res=await Api.post('/Movie',data)
    console.log(res.data)
    return res.data
})

export const viewMovie=createAsyncThunk('/viewMovie',async()=>{
    const res=await Api.get('/Movie')
    // console.log(res.data)
    return res.data
})

export const  deleteMovie=createAsyncThunk('/deleteMovie',async(id)=>{
// alert(id)
// console.log(id)
const res=await Api.delete(`/Movie/${id}`)
return res.data
})

export const updateMovie=createAsyncThunk('/updateMovie',async(data)=>{
const {id}=data
const res=await Api.put(`/Movie/${id}`,data)
return res.data

})

export const WatchMovie=createAsyncThunk('/WatchMovie',async(data)=>{
// console.log(data)
const res= await Api.post('/Watch',data)
// console.log((await res).data)
return res.data
})


export const ViewLater=createAsyncThunk('/viewLater',async()=>{
    const res=await Api.get('/Watch')
    console.log(res.data)
    return res.data
})

const movieSlice=createSlice({
   name:'movies',
    initialState:{
        movieList:[],
        watchLater:[]
    },
    extraReducers:(builder)=>{
        builder
        .addCase(addMovie.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.movieList.push(action.payload)
        })
        .addCase(viewMovie.fulfilled,(state,action)=>{
            console.log
            state.movieList = action.payload
        })
        .addCase(deleteMovie.fulfilled,(state,action)=>{
            // console.log(action.payload)
            const{id}=action.payload
            const filterData=state.movieList.filter(ele=>ele.id!==id)
            state.movieList=filterData

        })
        .addCase(updateMovie.fulfilled,(state,action)=>{
            const {id}=action.payload
            const index=state.movieList.findIndex(ele=>ele.id==id)
            if(index-1){
               state.movieList[index]=action.payload
            }
        })
        .addCase(WatchMovie.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.watchLater.push(action.payload)
        })
        .addCase(ViewLater.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.watchLater=action.payload
        })
    }
})

export default movieSlice.reducer;