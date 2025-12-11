import React from 'react'
import { lazy } from 'react'
// import { WatchMovie } from '../features/movieSlice'
const WatchMovie =lazy(()=>import('../pages/WatchMovie'))
const WatchLater =lazy(()=>import('../pages/WatchLater'))
const HomeForm  = lazy(()=>import('../pages/HomeForm'))
const HomeList  = lazy(()=>import('../pages/HomeList'))
export const Routing=[
      {
     path:'/',
     element:HomeList
    },
       {
     path:'/HomeForm',
     element:HomeForm
    }
    ,
       {
     path:'/UpdateMovie/:id',
     element:HomeForm
    }
    ,
       {
     path:'/WatchLater',
     element:WatchLater
    }
     ,
       {
     path:'/WatchMovie',
     element:WatchMovie
    }
  
]
