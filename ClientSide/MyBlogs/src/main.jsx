import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.Jsx'
import Login from './Pages/login.jsx'
import Register from './Pages/Register.jsx'
import Post from './Pages/Post.jsx'
import SinglePost from './Pages/SinglePost.jsx'
import Profile from './Pages/Profile.jsx'


const router = createBrowserRouter ([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/post',
        element:<Post/>
      },
      // {
      //   path:'/post/:postId',
      //   element:<Post/>
      // }, 
      {
        path:"/Blogpage/:postId",
        element:<SinglePost/>
      },
      {
        path:"/profile",
        element:<Profile/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
