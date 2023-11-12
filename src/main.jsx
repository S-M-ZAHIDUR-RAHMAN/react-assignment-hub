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
import Update from './Update/Update.jsx';
import Details from './Details/Details.jsx';
import Submission from './Submission/Submission.jsx';
import Marking from './SubmittedAssignments/Marking.jsx';
import Feature from './Home/Feature.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://assignment-hub-server.vercel.app/feature')
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch('https://assignment-hub-server.vercel.app/createAssignment')
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
        path: "/submittedAssignments",
        element: <PrivateRoute><SubmittedAssignments></SubmittedAssignments></PrivateRoute>,
        loader: () => fetch('https://assignment-hub-server.vercel.app/createSubmission')
      },
      {
        path: "/update/:title",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: () => fetch('https://assignment-hub-server.vercel.app/createAssignment')
      },
      {
        path: "/details/:title",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('https://assignment-hub-server.vercel.app/createAssignment')
      },
      {
        path: "/submission/:title",
        element: <PrivateRoute><Submission></Submission></PrivateRoute>,
        loader: () => fetch('https://assignment-hub-server.vercel.app/createAssignment')
      },
      {
        path: "/marking/:title",
        element: <PrivateRoute><Marking></Marking></PrivateRoute>,
        loader: () => fetch('https://assignment-hub-server.vercel.app/createSubmission')
      },
      {
        path: "/myAssignments",
        element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,
        loader: () => fetch('https://assignment-hub-server.vercel.app/createSubmission')
      },
      {
        path: "/feature",
        element: <Feature></Feature>,
      },
]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
