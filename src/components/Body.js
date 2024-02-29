import React from 'react'
import Header from './Header';
import Browse from './Browse';
import Login from './Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Body = () => {
    const appRouter=createBrowserRouter([
        
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/",
            element:<Login/>
           
        }
    ]);
    
  return (

    <div><RouterProvider router={appRouter}/></div>
  )
}

export default Body;
