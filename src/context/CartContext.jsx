import { createContext, useState, useContext, useEffect } from "react"
import products from "../data/products"

const CartContext = createContext(null)

const storedCart = localStorage.getItem("plantashop_cart") ? JSON.parse(localStorage.getItem("plantashop_cart")) : []

function CartProvider({ children }) {
  const [cart, setCart] = useState(storedCart)
  const [cartQuantity, setCartQuantity] = useState(0)

  // Atualiza o localStorage sempre que o carrinho muda
  useEffect(() => {
    localStorage.setItem('plantashop_cart', JSON.stringify(cart))
  }, [cart])

  // Atualiza a contagem de itens no carrinho
  useEffect(() => {
    let totalItems = 0
    if (cart.length > 0) {
      cart.forEach(item => totalItems += item.quantity)
      setCartQuantity(totalItems)
    } else {
      setCartQuantity(0)
    }
  }, [cart])
  
  // Checa se o produto já existe no carrinho
  const productExists = (id) => {
    return cart.find(item => item.id === id)
  }

  // Adiciona um produto ao carrinho
  const addToCart = (id) => {
    const product = products.find(product => product.id === id)
    const productInCart = productExists(id)

    if (productInCart) { // Se o produto já existir no carrinho, atualiza a quantidade
      productInCart.quantity += 1
      const updatedCart = cart.map(item => item.id === id ? productInCart : item)
      setCart(updatedCart)
    } else { // Se não, adiciona o produto
      setCart([...cart, {...product, quantity: 1}])
    }
  }

  // Remove um produto do carrinho
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
    if (cart.length === 0) setCartQuantity(0)
  }

  // Aumenta a quantidade de um produto
  const increase = (id) => {
    const product = cart.find(item => item.id === id)
    product.quantity += 1
    const updatedCart = cart.map(item => item.id === id ? product : item)
    setCart(updatedCart)
  }

  // Diminui a quantidade de um produto
  const decrease = (id) => {
    const product = cart.find(item => item.id === id)
    product.quantity -= 1

    if (product.quantity === 0) { // Remove do carrinho se a quantidade chegar a zero
      removeFromCart(id)
    } else {
      const updatedCart = cart.map(item => item.id === id ? product : item)
      setCart(updatedCart)
    }
  }

  const value = {
    cart,
    cartQuantity,
    addToCart,
    removeFromCart,
    increase,
    decrease
  }

  return <CartContext.Provider value={value}>
    {children}
  </CartContext.Provider>
}

export default CartProvider

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart precisa ser utilizado dentro de um Provider.")
  return context
}