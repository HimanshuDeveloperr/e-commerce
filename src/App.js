
 import React from 'react'
import './App.css';
import Grid from './Components/EssentialsLayout/Grid';
import Header from "./Components/EssentialsLayout/Header";
import Section from './Components/EssentialsLayout/Section';
import Products from './Components/Products/Products';
import CartProvider from './Components/Store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header/>
      <Grid/>
      <Section/>
      <Products/>
    </CartProvider>
  );
}

export default App;
