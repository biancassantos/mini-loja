import { useCart } from "../../context/CartContext"
import { Link } from "react-router"
import Skeleton from "./Skeleton"
import { FaTrashAlt } from "react-icons/fa"
import styles from "./CartItem.module.css"

function CartItem({ product, loading = false  }) {
  const { increase, decrease, removeFromCart } = useCart()

  if (loading) { // Verifica se deve renderizar o skeleton
    return <Skeleton />
  }

  return (
    <article className={styles.item} aria-label={product.name}>
      <div className={styles.itemDetails}>
        <Link to={`/p/${product.id}`} aria-label={`Ver detalhes de ${product.name}`}>
          <div className={styles.imgContainer}>
            <img src={product.img} alt={`Imagem de ${product.name}`} loading="lazy" />
          </div>
        </Link>

        <section className={styles.section}>
          <div>
            <h3 className={styles.name}>{product.name}</h3>
            <span className={styles.unityPrice} aria-label="Preço unitário">
              {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
          <p>
            Total: <strong className={styles.totalPrice}>{(product.price * product.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
          </p>
        </section>
      </div>

      <section className={`${styles.section} ${styles.controlSection}`}>
        <div className={styles.quantityControl}>
          <button 
          onClick={() => decrease(product.id)}
          aria-label="Diminuir quantidade do item"
          className={styles.quantityButton}
          >
            -
          </button>
          <span role="status" aria-live="polite" aria-label="Quantidade do item no carrinho">
            {product.quantity}
          </span>
          <button 
          onClick={() => increase(product.id)}
          aria-label="Aumentar quantidade do item"
          className={styles.quantityButton}
          >
            +
          </button>
        </div>

        <button 
        onClick={() => removeFromCart(product.id)}
        aria-label="Remover item do carrinho"
        className={styles.remove}
        >
          <FaTrashAlt aria-hidden="true" />
        </button>
      </section>
    </article>
  )
}

export default CartItem
