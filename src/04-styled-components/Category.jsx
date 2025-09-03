import { useState, useEffect } from "react"
import { Link } from "react-router"
import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import logo from "../assets/logo.png"
import { ThemeProvider, styled } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "./theme"
import { useThemeContext } from "../context/ThemeContext"
import products from "../data/products"
import { IoMdHome } from "react-icons/io"

function Category({ title, category }) {
  const [loading, setLoading] = useState(true) // Estado de carregamento para skeleton
  const [orderBy, setOrderBy] = useState("normal")
  const [orderedProducts, setOrderedProducts] = useState(products.filter(product => product.category === category))

  const categoryProducts = products.filter(product => product.category === category)

  const { theme } = useThemeContext()
  
  const alphabeticalOrder = [...categoryProducts].sort((a, b) => a.name.localeCompare(b.name))
  const cheapOrder = [...categoryProducts].sort((a, b) => a.price - b.price)
  const expensiveOrder = [...categoryProducts].sort((a, b) => b.price - a.price)

  useEffect(() => {
    setOrderedProducts(products.filter(product => product.category === category))
  }, [category])

  useEffect(() => { // Efeito para simular atraso
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = e => {
    const newOrder = e.target.value
    setOrderBy(newOrder)
    
    // Organiza os produtos de acordo com o select
    if (newOrder === "alphabetical") {
      setOrderedProducts(alphabeticalOrder)
    } else if (newOrder === "cheap") {
      setOrderedProducts(cheapOrder)
    } else if (newOrder === "expensive") {
      setOrderedProducts(expensiveOrder)
    } else {
      setOrderedProducts(categoryProducts)
    }
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        
        <Navbar />

        <Main>
          <Title>{title}</Title>

          <Breadcrumb aria-label="breadcrumb">
            <CrumbLink to="/" aria-label="Página inicial">
              <IoMdHome aria-hidden="true" />
            </CrumbLink>

            &gt;
 
            <span>{title}</span>
          </Breadcrumb>

          <MainContent aria-label="Ordenar produtos">
            <Select 
            value={orderBy}
            onChange={handleChange}
            >
              <Option value="normal">Ordenar por...</Option>
              <Option value="alphabetical">A-Z</Option>
              <Option value="cheap">Menor preço</Option>
              <Option value="expensive">Maior preço</Option>
            </Select>

            <CardsContainer aria-label="Lista de produtos">
              {loading // Se estiver carregando
              ? Array.from({ length: orderedProducts.length }).map((_, i) => ( // Cria 9 skeletons
                  <ProductCard key={'skeleton-' + i} loading /> // Card em estado loading
                ))
              : orderedProducts.map(product => { // Caso contrário, renderiza produtos reais
                return <ProductCard 
                key={product.id}
                product={product}
                loading={loading}
                />
              })}
            </CardsContainer>
          </MainContent>
        </Main>
        
        <Footer>
          <FooterContent>
            <FooterLogo src={logo} alt="Logo da PlantaShop" />
            <p>© 2025 PlantaShop</p>
            <p>Todos os direitos reservados.</p>
          </FooterContent>
        </Footer>
      </>
    </ThemeProvider>
  )
}

export default Category

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  padding: 8rem 2rem 6rem 2rem;

  @media screen and (max-width: 480px) {
    padding: 6rem 0;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.highlightDetails};
`

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-top: 2rem;
`

const CrumbLink = styled(Link)`
  font-size: 18px;
  transition: .25s;

  &:hover {
    color: ${({ theme }) => theme.main};
  }
`

const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 4rem 0;

  @media screen and (max-width: 480px) {
    padding: 4rem 1rem;
  }
`

const Select = styled.select`
  align-self: flex-end;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.highlightDetails};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  background-color: var(--color-bg);
`

const Option = styled.option`
  background-color: ${({ theme }) => theme.bg};
`

const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.main};
`

const FooterContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.accent};
  font-size: .9rem;
  text-align: center;
`

const FooterLogo = styled.img`
  width: 50px;
`