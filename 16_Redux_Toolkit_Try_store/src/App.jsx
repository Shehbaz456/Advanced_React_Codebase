import Header from './components/Header'
import Checkout from './pages/Checkout'
import ProductAsyncCall from './pages/ProductsAsynCall';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<ProductAsyncCall />} />
        <Route path="/checkout" element={<Checkout />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
