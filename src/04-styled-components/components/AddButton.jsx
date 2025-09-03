import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { FaCartPlus } from "react-icons/fa"
import styled from "styled-components"

function AddButton({ id }) {
  const [isPending, setIsPending] = useState(false)

  const { addToCart } = useCart()

  const handleClick = () => {
    if (!id || isPending) return // Evita múltiplos cliques ou quando não há produto
    setIsPending(true) // Define o estado para indicar operação em andamento
    setTimeout(() => { // Simula um pequeno atraso de processamento
      addToCart(id) // Chama o callback informando o id
      setIsPending(false) // Libera o botão após simulação
    }, 600)
  }

  return (
    <Button 
    onClick={handleClick}
    aria-label="Adicionar produto ao carrinho"
    disabled={isPending} // Desabilita quando em operação
    aria-disabled={isPending} // Reflete o estado para tecnologia assistiva
    aria-busy={isPending} // Indica que está processando
    >
      {isPending 
      ? "Adicionando..." 
      : <>
          <FaCartPlus aria-hidden="true" /> Adicionar
        </>
      }
    </Button>
  )
}

export default AddButton

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.main};
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 500;
  padding: 3px;
  cursor: pointer;
  transition: .25s;

  &:hover:not(:active):not(:disabled) {
    background-color: transparent;
    border-color: ${({ theme }) => theme.highlightDetails};
    color: ${({ theme }) => theme.highlightDetails};
  }

  &:active {
    background-color: transparent;
    color: ${({ theme }) => theme.highlightDetails};
    scale: .9;
  }

  &:disabled {
    cursor: auto;
    opacity: .7;
  }
`