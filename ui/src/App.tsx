
import './App.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routers'
import "./axiosConfig";

function App() {
  return (
    <RouterProvider router={routers} />
  )
}

export default App
