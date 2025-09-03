import styled from "styled-components"
import { keyframes } from "styled-components"

function Skeleton() {
  return (
    <Card role="article" aria-busy="true" aria-label="Produto carregando"> {/* Elemento semântico article para o card */}
      <Img className="media" />
      <Info>
        <Name />
        <Rating />
        <Price />
      </Info>
      <Button />
    </Card>
  )
}

export default Skeleton

const shimmer = keyframes`
  100% { transform: translateX(100%); }
`

const SkeletonDiv = styled.div`
  position: relative;
  background: ${({ theme }) => theme.skeleton};
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.skeletonHighlight}, transparent);
    animation: ${shimmer} 1.2s infinite;
  }

  &.media {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    background: ${({ theme }) => theme.skeleton};
    display: block;
    transition: opacity 200ms ease;
  }
`

const Card = styled(SkeletonDiv)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 205px;
  background-color: ${({ theme }) => theme.bgCard};
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--color-border-line);
`

const Img = styled(SkeletonDiv)`
  width: 100%;
  height: 180px;
  border-radius: 4px;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Name = styled(SkeletonDiv)`
  font-size: 1.1rem;
`

const Rating = styled(SkeletonDiv)`
  height: 22px
`

const Price = styled(SkeletonDiv)`
  font-size: 1.rem;
`
const Button = styled(SkeletonDiv)`
  border-radius: 4px;
  font-size: 1rem;
  padding: 3px;
  height: 34px;
`