import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Productos from "./components/Productos";
import Ofertas from "./components/Ofertas";
import Vender from "./components/Vender"
import NoPage from "./components/NoPage";
import Usuario from "./components/Usuario"
import Carrito from "./components/Carrito"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="ofertas" element={<Ofertas />} />
          <Route path="vender" element={<Vender />} />
          <Route path="usuario" element={<Usuario />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}