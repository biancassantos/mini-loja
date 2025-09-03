import { Link } from "react-router"
import AddButton from "./AddButton"
import Rating from "./Rating"
import Skeleton from "./Skeleton"
import styled from "styled-components"

function ProductCard({ product, loading = false  }) {
  if (loading) { // Verifica se deve renderizar o skeleton
    return <Skeleton />
  }

  return (
    <Card aria-label={product.name}>
      <Link to={`/p/${product.id}`} aria-label={`Ver detalhes de ${product.name}`}>
        <ImgContainer>
          {product.tag && 
            <Badge 
            className={product.tag === "Novo" ? "new" : "promo"} 
            aria-label={`Tag: ${product.tag}`}
            >
              {product.tag}
            </Badge>
          }
          <Img src={product.img} alt={`Imagem de ${product.name}`} loading="lazy" />
        </ImgContainer>
      </Link>

      <Info>
        <Name>
          {product.name.length > 15 ? `${product.name.substring(0, 14)}...` : product.name}
        </Name>
        <Rating 
        key={product.id} 
        rating={product.rating} 
        ratingAmount={product.ratingAmount} 
        />
        <Price>
          {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </Price>
      </Info>

      <AddButton id={product.id} />
    </Card>
  )
}

export default ProductCard

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 205px;
  background-color: ${({ theme }) => theme.bgCard};
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--color-border-line);
  transition: .25s;

  &:hover {
    box-shadow: ${({ theme }) => theme.cardShadow};
  }
`

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 180px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.accent};
`

const Img = styled.img`
  width: 100%;
`

const Badge = styled.span`
  position: absolute;
  top: 0;
  width: fit-content;
  padding: 1px 6px;
  font-size: .9rem;
  font-weight: 500;
  border-radius: 4px;
  color: ${({ theme }) => theme.accent};
  z-index: 10;

  &.new {
    background-color: ${({ theme }) => theme.main};
  }

  &.promo {
    background-color: ${({ theme }) => theme.bgPromoBadge};
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Name = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`

const Price = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.highlightDetails};
`