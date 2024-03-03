import { React } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Reservation } from "./pages/Reservation";
import { Menu } from "./pages/Menu";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Reservation' element={<Reservation />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
