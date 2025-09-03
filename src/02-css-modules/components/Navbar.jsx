import { Link, NavLink, useNavigate } from "react-router"
import { useThemeContext } from "../../context/ThemeContext"
import { useCart } from "../../context/CartContext"
import logo from "../../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa"
import { IoSunny, IoMoon } from "react-icons/io5"
import styles from "./Navbar.module.css"

function Navbar() {
  const { theme, toggleTheme } = useThemeContext()
  const { cartQuantity } = useCart()

  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/" className={`${styles.logo} ${styles.link}`} aria-label="Página inicial">
          <img src={logo} alt="Logo da PlantaShop" className={styles.logoImg} />
          <span className={styles.logoText}>PlantaShop</span>
        </Link>

        <div className={styles.pages}>
          <NavLink 
          to="/plantas" 
          className={`${styles.pageLink} ${styles.link} ${({ isActive }) => isActive ? "active" : ""}`}
          aria-label="Ir para Plantas"
          >
            Plantas
          </NavLink>
          <NavLink 
          to="/flores"
          className={`${styles.pageLink} ${styles.link} ${({ isActive }) => isActive ? "active" : ""}`}
          aria-label="Ir para Flores"
          >
            Flores
          </NavLink>
        </div>

        <div className={styles.buttons}>
          <button 
          className={styles.themeToggleBtn} 
          aria-label={theme === "light" ? "Alternar para tema escuro" : "Alternar para tema claro"}
          onClick={toggleTheme}
          >
            {theme === "light" ? <IoMoon aria-hidden="true" /> : <IoSunny aria-hidden="true" />}
          </button>

          <button 
          onClick={() => navigate("/cart")}
          className={styles.cartBtn} 
          aria-label="Ver itens do carrinho"
          >
            <FaShoppingCart className={styles.cartIcon} aria-hidden="true" />
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
