import { Link, NavLink, useNavigate } from "react-router"
import { useThemeContext } from "../../context/ThemeContext"
import { useCart } from "../../context/CartContext"
import logo from "../../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa"
import { IoSunny, IoMoon } from "react-icons/io5"


function Navbar() {
  const { theme, toggleTheme } = useThemeContext()
  const { cartQuantity } = useCart()

  const navigate = useNavigate()

  return (
    <header id="header">
      <nav id="navbar">
        <Link to="/" id="logo" aria-label="Página inicial">
          <img src={logo} alt="Logo da PlantaShop" />
          <span>PlantaShop</span>
        </Link>

        <div id="pages-links">
          <NavLink 
          to="/plantas" 
          className={({ isActive }) => isActive ? "active" : ""}
          aria-label="Ir para Plantas"
          >
            Plantas
          </NavLink>
          <NavLink 
          to="/flores"
          className={({ isActive }) => isActive ? "active" : ""}
          aria-label="Ir para Flores"
          >
            Flores
          </NavLink>
        </div>

        <div id="buttons">
          <button 
          id="theme-toggle-btn" 
          aria-label={theme === "light" ? "Alternar para tema escuro" : "Alternar para tema claro"}
          onClick={toggleTheme}
          >
            {theme === "light" ? <IoMoon aria-hidden="true" /> : <IoSunny aria-hidden="true" />}
          </button>

          <button 
          onClick={() => navigate("/cart")} 
          id="cart-btn" 
          aria-label="Ver itens do carrinho"
          >
            <FaShoppingCart id="cart-icon" aria-hidden="true" />
            <span role="status" aria-live="polite" aria-label="Itens no carrinho">
              {cartQuantity}
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
