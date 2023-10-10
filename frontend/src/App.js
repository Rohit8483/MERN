import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Footer from "./components/Footer"
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<Products />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
         
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
