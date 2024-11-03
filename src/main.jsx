import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Contact from './Contact/Contact';
import About from './About/About';
import Users from './Users/Users';
import Userdetails from './UserDetails/Userdetails';
import Posts from './Posts/Posts';
import PostDetails from './PostDetails/PostDetails';


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:`/user/:userId`,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<Userdetails></Userdetails>
      },
      {
        path:`/posts`,
        loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts`),
        element:<Posts></Posts>
      },
      {
        path:`/post/:postId`,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
