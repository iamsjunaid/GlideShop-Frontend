import '../styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp ({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart)) // save cart to local storage
    let subt = 0
    for (const item in cart) {
      subt += cart[item].qty * cart[item].price
    }
    setSubTotal(subt)
  }
}

export default MyApp
