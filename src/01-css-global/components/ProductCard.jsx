import { Link } from "react-router"
import AddButton from "./AddButton"
import Rating from "./Rating"
import Skeleton from "./Skeleton"

function ProductCard({ product, loading = false  }) {
  if (loading) { // Verifica se deve renderizar o skeleton
    return <Skeleton />
  }

  return (
    <article className="card" aria-label={product.name}>
      <Link to={`/p/${product.id}`} aria-label={`Ver detalhes de ${product.name}`}>
        <div className="card-img-container">
          {product.tag && 
            <span 
            className={`badge ${product.tag === "Novo" ? "new" : "promo"}`} 
            aria-label={`Tag: ${product.tag}`}
            >
              {product.tag}
            </span>
          }
          <img src={product.img} alt={`Imagem de ${product.name}`} loading="lazy" />
        </div>
      </Link>

      <div className="card-info">
        <h2>
          {product.name.length > 15 ? `${product.name.substring(0, 14)}...` : product.name}
        </h2>
        <Rating 
        key={product.id} 
        rating={product.rating} 
        ratingAmount={product.ratingAmount}
        />
        <span className="price">
          {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
      </div>

      <AddButton id={product.id} />
    </article>
  )
}

export default ProductCard
