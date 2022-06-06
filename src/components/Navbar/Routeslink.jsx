import React from 'react'
import { Route ,Routes} from "react-router-dom";
import Home from '../Pages/Home.jsx'
import Login from "./Pages/Login.jsx"
const Routeslink = () => {
  return (
    <div>
        <Routes>
    <Route path="/Home"><Home></Home></Route>
    <Route path="/"><Login></Login></Route>
   
</Routes>



    </div>
  )
}

export default Routeslink