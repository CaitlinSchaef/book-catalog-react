import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { createContext } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

//project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// page imports
import App from './Pages/App.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import BrowseBooks from './Pages/BrowseBooks.jsx'
import FavoriteBooks from './Pages/FavoriteBooks.jsx';
import ToBeRead from './Pages/ToBeRead.jsx';
import UserProfile from './Pages/UserProfile.jsx';
import MyNavBar from './NavBar.jsx';
import CreateUser from './Pages/CreateUser.jsx';
// import { initialState, taskReducer } from './Pages/ToDoFunction.jsx';

import { AuthContext } from './authContext'


const site = import.meta.env.BASE_URL

//going to make a function to make some of the routes be private
const PrivateRoutes = () => {
  let auth = {'token': true}
  return (
    auth.token ? <Outlet/> : <Navigate to='/'/>
  )
}

//this is our layout to install
// If you want to add a footer, do it after the outlet div with <Footer /> same for navbar
function Layout() {
  return (
    <div className="d-flex flex-column justify-content-between vh-100">
      <MyNavBar />
      <div id='page-content'>
        <Outlet />
      </div>
    </ div>
  )
}

// this is our path 
// outlet is all the stuff in the children path 
//going to try a new set up with the private routes:
function MyRouter() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route  path='/userprofile' element={<UserProfile />} errorElement={<ErrorPage />}/>
          <Route  path='/browsebooks' element={<BrowseBooks />} errorElement={<ErrorPage />}/>
          <Route  path='/favoritebooks' element={<FavoriteBooks />} errorElement={<ErrorPage />}/>
          <Route  path='/toberead' element={<ToBeRead />} errorElement={<ErrorPage />}/>
          <Route />
        </Route>
        <Route  path='/' element={<App />} errorElement={<ErrorPage />}/>
        <Route  path='/createuser' element={<CreateUser />} errorElement={<ErrorPage />}/>
      </Routes>
      </Layout>
    </Router>
  )
}

const router = MyRouter()
// //old way
// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/',
//         element: <App />,
//         errorElement: <ErrorPage />
//       },
//       {
//         path: '/userprofile',
//         element: <UserProfile />
//       },
//       {
//         path: '/browsebooks',
//         element: <BrowseBooks />
//       },
//       {
//         path: '/favoritebooks',
//         element: <FavoriteBooks />
//       },
//       {
//         path: '/toberead',
//         element: <ToBeRead />
//       },
//     ]
//   }
// ], {
//   basename: site
// }
// )

// export const TaskContext = createContext()

// const TaskProvider = ({children}) => {
//   const [state, dispatch] = useReducer(taskReducer, initialState)
//   console.log("state:", state)
//   return (
//     <TaskContext.Provider value={{state, dispatch}}>
//       {children}
//     </TaskContext.Provider>
//   )
// }

// basically we're creating values that we're going to track and update, and then we need to wrap that whole thing around the app
const AuthContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState()

  const auth = {
    accessToken,
    setAccessToken
  }

  return (
    <AuthContext.Provider value={{ auth }} >
      {children}
      </AuthContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
   <RouterProvider router={router} />
  </AuthContextProvider>
)