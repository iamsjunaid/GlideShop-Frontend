import '../styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp ({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    try {
      const cart = localStorage.getItem('cart')
      if (cart) {
        setCart(JSON.parse(cart))
      }
    } catch (error) {
      console.log(error)
      localStorage.clear()
    }
  }, [])

  const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart)) // save cart to local storage
    let subt = 0
    for (const item in cart) {
      subt += cart[item].qty * cart[item].price
    }
    setSubTotal(subt)
  }
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    const newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty += qty
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }

    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const deleteItemFromCart = (itemCode) => {
    const newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty -= 1
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }
}

export default MyApp
