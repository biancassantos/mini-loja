import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"

function Rating({ rating }) {
  return (
    <div 
    role="img" 
    aria-label={rating ? `${rating} de 5 estrelas` : "Carregando"} 
    className="flex items-center gap-[2px] text-amber-300 text-lg"
    >
      {Array.from({ length: 5 }).map((_, i) => {
        if (i + 1 <= rating) {
          return <FaStar key={i} aria-hidden="true" />
        } else if (i + 1 - 0.5 <= rating) {
          return <FaStarHalfAlt key={i} aria-hidden="true" />
        }
        return <FaRegStar key={i} aria-hidden="true" />
      })}
    </div>
  )
}

export default Rating
