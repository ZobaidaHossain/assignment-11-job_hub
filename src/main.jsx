import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login'
import AuthProvider from './providers/AuthProvider';
import Error from './Pages/Error';
import Blogs from './Pages/Blogs';
import AddJob from './component/AddJob';
import AllJob from './component/AllJob';
import Details from './component/Details';
import ApplyModel from './component/ApplyModel';
import AddCart from './component/AddCart';
import MyJob from './component/MyJob';
import PrivateRoute from './Routes/PrivateRoute';
import UpdateMyJob from './component/UpdateMyJob';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://job-hub-server-gamma.vercel.app/addjob')
      },
      {
        path:'/signup',
        element:<Register></Register>
      },
      {
        path:'/signin',
        element:<Login></Login>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/addjob',
        element:<PrivateRoute><AddJob></AddJob></PrivateRoute>

      },
      {
        path:'/alljob',
        element:<AllJob></AllJob>,
        loader:()=>fetch('https://job-hub-server-gamma.vercel.app/addjob')
      },
      {
        path:"alljob/details/:id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`https://job-hub-server-gamma.vercel.app/addjob/${params.id}`)
      }
      ,
      {
        path:'alljob/details/apply',
        element:<ApplyModel></ApplyModel>
      }
      ,
      {
        path:"/cart",
        element:<PrivateRoute><AddCart></AddCart></PrivateRoute>,
        loader: ()=>fetch('https://job-hub-server-gamma.vercel.app/cart')
      },
      {
        path:'/myjobs',
        element:<PrivateRoute><MyJob></MyJob></PrivateRoute>
      },
      {
        path:'/myjobs/update/:id',
        element:<UpdateMyJob></UpdateMyJob>,
        loader:({params})=>fetch(`https://job-hub-server-gamma.vercel.app/addjob/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
