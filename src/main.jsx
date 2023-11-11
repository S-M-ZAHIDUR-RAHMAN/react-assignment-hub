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
        loader: () => fetch('http://localhost:5000/feature')
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch('http://localhost:5000/createAssignment')
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
        loader: () => fetch('http://localhost:5000/createSubmission')
      },
      {
        path: "/update/:title",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/createAssignment')
      },
      {
        path: "/details/:title",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/createAssignment')
      },
      {
        path: "/submission/:title",
        element: <PrivateRoute><Submission></Submission></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/createAssignment')
      },
      {
        path: "/marking/:title",
        element: <PrivateRoute><Marking></Marking></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/createSubmission')
      },
      {
        path: "/myAssignments",
        element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/createSubmission')
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
