
import About from "./pages/About";
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
