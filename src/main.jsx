import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Assignments from './Assignments/Assignments.jsx';
import CreateAssignments from './CreateAssignments/CreateAssignments.jsx';
import MyAssignments from './MyAssignments/MyAssignments.jsx';
import SubmittedAssignments from './SubmittedAssignments/SubmittedAssignments.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/createAssignments",
        element: <PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
      },
      {
        path: "/myAssignments",
        element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>
      },
      {
        path: "/submittedAssignments",
        element: <PrivateRoute><SubmittedAssignments></SubmittedAssignments></PrivateRoute>
      },
]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
