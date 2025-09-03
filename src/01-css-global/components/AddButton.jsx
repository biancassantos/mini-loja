import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { FaCartPlus } from "react-icons/fa"

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
    <button 
    onClick={handleClick}
    className="add-to-cart-btn" 
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
    </button>
  )
}

export default AddButton
