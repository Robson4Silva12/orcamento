// import { Navbar } from "./Components/Navbar"
// import { Exemplo } from "./Components/Exemplo"
import {AppRoutes} from "./Routes/Routes"
import {BrowserRouter} from "react-router-dom"

function App() {
 
  return (
    <BrowserRouter>
    <AppRoutes/>    
    </BrowserRouter>
   
  )
}

export default App
