import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"

function Rating({ rating, ratingAmount }) {
  return (
    <div className="rating">
      <div className="stars-container" role="img" aria-label={rating ? `${rating} de 5 estrelas` : "Carregando"}>
        {Array.from({ length: 5 }).map((_, i) => {
          if (i + 1 <= rating) {
            return <FaStar key={i} aria-hidden="true" />
          } else if (i + 1 - 0.5 <= rating) {
            return <FaStarHalfAlt key={i} aria-hidden="true" />
          }
          return <FaRegStar key={i} aria-hidden="true" />
        })}
      </div>
      <span className="quantity" aria-label="Quantidade de avaliações">({ratingAmount})</span>
    </div>
  )
}

export default Rating
