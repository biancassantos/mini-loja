import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"
import styled from "styled-components"

function Rating({ rating, ratingAmount }) {
  return (
    <RatingContainer>
      <Stars role="img" aria-label={rating ? `${rating} de 5 estrelas` : "Carregando"}>
        {Array.from({ length: 5 }).map((_, i) => {
          if (i + 1 <= rating) {
            return <FaStar key={i} aria-hidden="true" />
          } else if (i + 1 - 0.5 <= rating) {
            return <FaStarHalfAlt key={i} aria-hidden="true" />
          }
          return <FaRegStar key={i} aria-hidden="true" />
        })}
      </Stars>
      <RatingAmount aria-label="Quantidade de avaliações">({ratingAmount})</RatingAmount>
    </RatingContainer>
  )
}

export default Rating

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme }) => theme.starColor};
`

const RatingAmount = styled.span`
  font-size: .9rem;
  color: ${({ theme }) => theme.textDimmed};
`