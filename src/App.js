import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext.js';
import Home from "./pages/HomePages/Home.js";
import About from "./pages/AboutPages/About.js";
import Menu from "./pages/MenuPages/Menu.js";
import Contact from "./pages/ContactPages/Contact.js";
import Cart from "./pages/CartPages/Cart.js";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Nastar from './Detail/Nastar.Details.js';
import Kastangel from './Detail/Kastangel.Detail.js';
import KueKacang from './Detail/KueKacang.Detail.js';
import Semprit from './Detail/Semprit.Detail.js';
import LidahKucing from './Detail/LidahKucing.Detail.js';
import PutriSalju from './Detail/PutriSalju.Detail.js';
import Login from './Logres/LoginAdmin.js';
import Register from './Logres/HomeUser.js';
import CartContext  from './Context/CartContext.js';
import Checkout from './pages/checkout.js';
import OrderManagement from './OrderManagement';
import ConfirmationPage from "./ConfirmationPage";
import MyOrderPage from "./MyOrderPage";
import AddressConfirmation from "./AddressConfirmation";



function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/Menu/nastar" element={<Nastar />} />
          <Route path="/Menu/kastangel" element={<Kastangel />} />
          <Route path="/Menu/kuekacang" element={<KueKacang />} />
          <Route path="/Menu/semprit" element={<Semprit />} />
          <Route path="/Menu/lidahkucing" element={<LidahKucing />} />
          <Route path="/Menu/putrisalju" element={<PutriSalju />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/cart/context" element={<CartContext/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/OrderManagement" element={<OrderManagement/>} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/my-order" element={<MyOrderPage />} />
          <Route path="/address-confirmation" element={<AddressConfirmation />} />
        </Routes>
        <Footer />
      </Router>
      </CartProvider>
    );
}
export default App;