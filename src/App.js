import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features  from "./pages/Features";
import Help from "./pages/Help";
import Header from "./components/Header";
import Footer from './components/Footer';
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={ <About /> }></Route>
        <Route path="/Features" element={ <Features /> }></Route>
        <Route path="/Help" element={<Help />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Forgot" element={ <Forgot /> }></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  );
}
export default App;
