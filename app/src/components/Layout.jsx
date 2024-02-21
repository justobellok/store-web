import { Outlet, Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle} from "react-icons/fa";
import "./style/layout.css"

const Layout = () => {
  return (
    <>
      <nav className="nav-list">
        <Link to="/" className="logo">Shopping</Link>
        <ul className="list">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/ofertas">Ofertas</Link>
          </li>
          <li>
            <Link to="/vender">Vender</Link>
          </li>
        </ul>
        <section className="user">
          <Link to="/carrito">
            <FaShoppingCart />
          </Link>
          <Link to="/usuario">
            <FaUserCircle />
          </Link>
        </section>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;