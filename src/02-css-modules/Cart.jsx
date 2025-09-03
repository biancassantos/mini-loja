import { useState, useEffect } from "react"
import { useCart } from "../context/CartContext"
import Navbar from "./components/Navbar"
import CartItem from "./components/CartItem"
import logo from "../assets/logo.png"
import styles from "./Cart.module.css"

function Cart() {
  const [loading, setLoading] = useState(true) // Estado de carregamento para skeleton
  const [total, setTotal] = useState(0)

  const { cart, cartQuantity } = useCart()

  useEffect(() => {
    let value = 0
    if (cart.length > 0) {
      cart.forEach(item => value += item.price * item.quantity)
      setTotal(value)
    }
  }, [cart])

  useEffect(() => { // Efeito para simular atraso
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Carrinho</h1>

        {cart.length <= 0 
        ? <p className={styles.emptyCart}>Seu carrinho está vazio.</p>
        : <section className={styles.mainContent}>
            <section aria-label="Itens no carrinho" className={`${styles.cartSection} ${styles.items}`}>
              <h2 className={styles.sectionTitle}>Meus itens</h2>
              <section className={`${styles.container} ${styles.myItems}`}>
                {cart.map(item => {
                  return <CartItem product={item} loading={loading} />
                })}
              </section>
            </section>

            <section aria-label="Resumo da compra" className={`${styles.cartSection} ${styles.summary}`}>
              <h2 className={styles.sectionTitle}>Resumo</h2>

              <section className={styles.container}>
                <div className={`${styles.summaryLine} ${styles.detail}`}>
                  <p>Subtotal ({cartQuantity} itens)</p>
                  <span className={styles.price}>
                    {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>

                <div className={`${styles.summaryLine} ${styles.detail}`}>
                  <form className={styles.form}>
                    <label htmlFor="coupon">Cupom</label>
                    <div className={styles.inputContainer}>
                      <input type="text" id="coupon" className={styles.input} />
                      <button 
                      aria-label="Aplicar cupom de desconto" 
                      className={`${styles.button} ${styles.couponButton}`}
                      >
                        Aplicar
                      </button>
                    </div>
                  </form>
                </div>

                <div className={`${styles.summaryLine} ${styles.detail}`}>
                  <p>Frete</p>
                  <span className={styles.price}>R$ 5,00</span>
                </div>

                <div aria-label="Total da compra" className={`${styles.summaryLine} ${styles.total}`}>
                  <p>Total</p>
                  <span>{(total + 5).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>

                <button className={`${styles.button} ${styles.checkoutButton}`}>Continuar para Checkout</button>
              </section>
            </section>
          </section>
        }
      </main>

      <footer className={styles.footer}>
        <section className={styles.footerContainer}>
          <img src={logo} alt="Logo da PlantaShop" className={styles.footerLogo} />
          <p>© 2025 PlantaShop</p>
          <p>Todos os direitos reservados.</p>
        </section>
      </footer>
    </section>
  )
}

export default Cart
