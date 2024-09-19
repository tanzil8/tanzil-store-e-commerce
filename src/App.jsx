import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./componenets/header"
import Home from "./pages/home"
import Productinfo from "./pages/productinfo"
import Products from "./pages/products"
import Theme from "./context/themcontext"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import Profile from "./pages/profile"
import { Card } from "@mui/material"
import Cardpage from "./pages/cardpage"



function App() {
 
  return (

  <>
  <Theme>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Products/>}/>
    <Route path="/Products" element={<Products/>}/>
    <Route path="/Productinfo/:id" element={<Productinfo/>}/>
    <Route path="/Signin" element={<Signin/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/cardpage" element={<Cardpage/>}/>

   
  </Routes>
  </BrowserRouter>
  </Theme>
  </>
  ) 
}

export default App
