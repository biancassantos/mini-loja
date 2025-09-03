import { useState, useEffect } from "react"
import { useParams, Link } from "react-router"
import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import logo from "../assets/logo.png"
import products from "../data/products"
import { IoMdHome } from "react-icons/io"
import "./style.css"

function ProductDetails() {
  const [loading, setLoading] = useState(true) // Estado de carregamento para skeleton

  const { id } = useParams()
  const product = products.find(product => product.id == id)

  useEffect(() => { // Efeito para simular atraso
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />
      
      <main className="max-w-[1200px] mx-auto min-h-screen h-full py-26 px-4 flex flex-col gap-8 dark:text-white sm:px-8">
        <nav aria-label="breadcrumb" className="flex items-center gap-3 font-medium">
          <Link 
          to="/"
          aria-label="Página inicial"  
          className="text-lg hover:text-emerald-700 transition-colors duration-250"
          >
            <IoMdHome aria-hidden="true" />
          </Link>

           &gt;

          <Link 
          to={product.category === "plant" ? "/plantas" : "/flores"}
          aria-label={product.category === "plant" ? "Ir para Plantas" : "Ir para Flores"} 
          className="hover:text-emerald-700 transition-colors duration-250">
            {product.category === "plant" ? "Plantas" : "Flores"}
          </Link>

          &gt; 
          <span>{product.name}</span>
        </nav>

        {loading // Se estiver carregando
        ? <ProductCard key={'skeleton'} loading /> // Card em estado loading
        : <ProductCard product={product} loading={loading} /> // Caso contrário, renderiza o produto
        }
        
      </main>
      
      <footer className="bg-emerald-700">
        <section className="flex flex-col items-center gap-[18px] max-w-[1200px] mx-auto py-16 px-8 text-green-50 text-[.9rem] text-center">
          <img src={logo} alt="Logo da PlantaShop" className="size-[50px]" />
          <p>© 2025 PlantaShop</p>
          <p>Todos os direitos reservados.</p>
        </section>
      </footer>
    </>
  )
}

export default ProductDetails
