import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Heart, User, ShoppingBag } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onCartClick={toggleCart} />
      <Hero />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer />
    </div>
  );
}

export default App;