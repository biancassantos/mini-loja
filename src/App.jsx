import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import Home from "./01-css-global/Home"
import Category from "./04-styled-components/Category"
import ProductDetails from "./03-tailwind/ProductDetails"
import Cart from "./02-css-modules/Cart"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plantas" element={<Category title="Plantas" category="plant" />} />
        <Route path="/flores" element={<Category title="Flores" category="flower" />} />
        <Route path="/p/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />

        <Route // Rota coringa para redirecionar
          path="*" // Qualquer outra rota
          element={<Navigate to="/" replace />} // Redireciona para a raiz
        />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
