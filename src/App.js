import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Admin from "./Admin";

import ViewProduct from "./ViewProducts";
import Home from "./Home";
export default function App() {
 return(
 <div>
    <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
        <Route path="admin"element={<Admin/>}>
          <Route path="ViewProduct"element={<ViewProduct/>}> </Route>
        </Route>
    </Routes>
  </BrowserRouter>
  </div>
 )
}
