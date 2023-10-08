import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Footer from "./components/Footer"
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/signup" element={<SignUp />} />
         
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
