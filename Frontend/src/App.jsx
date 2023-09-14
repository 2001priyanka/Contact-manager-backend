// import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes> 
    </BrowserRouter>
  )
};

export default App;
