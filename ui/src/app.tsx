
import './app.css'
import { RouterProvider } from 'react-router-dom'
import "./axios.config";
import routers from './routers'
import { ApplicationContextProvider } from './contexts/application';

function App() {
  return (
    <ApplicationContextProvider>
       <RouterProvider router={routers} />
    </ApplicationContextProvider>
   
  )
}

export default App
