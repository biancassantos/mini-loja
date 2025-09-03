import { Link, NavLink, useNavigate } from "react-router"
import styled from "styled-components"
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
    <Header>
      <Nav>
        <Logo to="/" aria-label="Página inicial">
          <LogoIcon src={logo} alt="Logo da PlantaShop" />
          <LogoText>PlantaShop</LogoText>
        </Logo>

        <NavLinksContainer>
          <PageLink 
          to="/plantas" 
          className={({ isActive }) => isActive ? "active" : ""}
          aria-label="Ir para Plantas"
          >
            Plantas
          </PageLink>
          <PageLink 
          to="/flores"
          className={({ isActive }) => isActive ? "active" : ""}
          aria-label="Ir para Flores"
          >
            Flores
          </PageLink>
        </NavLinksContainer>

        <ButtonsContainer>
          <ToggleThemeButton 
          aria-label={theme === "light" ? "Alternar para tema escuro" : "Alternar para tema claro"}
          onClick={toggleTheme}
          >
            {theme === "light" ? <IoMoon aria-hidden="true" /> : <IoSunny aria-hidden="true" />}
          </ToggleThemeButton>

          <CartButton onClick={() => navigate("/cart")} aria-label="Ver itens do carrinho">
            <CartIcon aria-hidden="true" />
            <span role="status" aria-live="polite" aria-label="Itens no carrinho">
              {cartQuantity}
            </span>
          </CartButton>
        </ButtonsContainer>
      </Nav>
    </Header>
  )
}

export default Navbar

const Header = styled.header`
  background-color: ${({ theme }) => theme.bgHeader};
  position: fixed;
  width: 100%;
  z-index: 200;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`

const LogoText = styled.span`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const LogoIcon = styled.img`
  width: 40px;
`

const NavLinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 480px) {
    gap: 1rem;
  }
`

const PageLink = styled(NavLink)`
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  padding: 2px 3px;
  border-bottom: 2px solid transparent;
  transition: .25s;

  &:hover:not(.active) {
    color: ${({ theme }) => theme.main};
  }

  &.active {
    color: ${({ theme }) => theme.highlightDetails};
    border-color: ${({ theme }) => theme.highlightDetails};
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 480px) {
    gap: 1rem;
  }
`

const ToggleThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.highlightDetails};
  width: 31px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.highlightDetails};
  background-color: transparent;
  cursor: pointer;
  transition: .25s;

  &:hover {
    background-color: ${({ theme }) => theme.highlightDetails};
    color: ${({ theme }) => theme.bgHeader};
  }
`

const CartButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 85px;
  padding: 8px 14px;
  border-radius: 25px;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  cursor: pointer;
  transition: .25s;

  &:hover {
    filter: brightness(96%);
  }
`

const CartIcon = styled(FaShoppingCart)`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.highlightDetails};
`