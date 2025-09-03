import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProductCard from "./components/ProductCard"
import products from "../data/products"
import logo from "../assets/logo.png"
import "./style.css"

function Home() {
  const [loading, setLoading] = useState(true) // Estado de carregamento para skeleton
  const [orderBy, setOrderBy] = useState("normal")
  const [orderedProducts, setOrderedProducts] = useState(products)
  
  const alphabeticalOrder = [...products].sort((a, b) => a.name.localeCompare(b.name))
  const cheapOrder = [...products].sort((a, b) => a.price - b.price)
  const expensiveOrder = [...products].sort((a, b) => b.price - a.price)

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
      setOrderedProducts(products)
    }
  }

  return (
    <>
      <Navbar />
      
      <main id="main">
        <Hero />
        <section id="main-content" aria-label="Ordenar produtos">
          <select 
          id="order" 
          value={orderBy}
          onChange={handleChange}
          >
            <option value="normal">Ordenar por...</option>
            <option value="alphabetical">A-Z</option>
            <option value="cheap">Menor preço</option>
            <option value="expensive">Maior preço</option>
          </select>

          <section id="cards-container" aria-label="Lista de produtos">
            {loading // Se estiver carregando
            ? Array.from({ length: products.length }).map((_, i) => ( // Cria quantidade necessária de skeletons
                <ProductCard key={'skeleton-' + i} loading /> // Card em estado loading
              ))
            : orderedProducts.map(product => { // Caso contrário, renderiza produtos reais
              return <ProductCard 
              key={product.id}
              product={product}
              loading={loading}
              />
            })}
          </section>
        </section>
      </main>
      
      <footer id="footer">
        <section>
          <img src={logo} alt="Logo da PlantaShop" />
          <p>© 2025 PlantaShop</p>
          <p>Todos os direitos reservados.</p>
        </section>
      </footer>
    </>
  )
}

export default Home
