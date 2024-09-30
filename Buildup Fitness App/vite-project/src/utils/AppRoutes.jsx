import { Navigate } from "react-router-dom";
import Login from "../hooks/Login"
import Signup from "../hooks/Signup"
import Home from "../components/HomePage/Home"
import UserProfile from "../components/Dashboard-Users/UserProfile";
import ProtectedRoute from "./ProtectedRoute"
// import AdminGuard from "./AdminGuard"

 
const AppRoutes = [
    {
        path: '*',
        element: <Navigate to='/home'/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/userProfile',
        element: <ProtectedRoute><UserProfile/></ProtectedRoute>
    },
]



export default AppRoutes