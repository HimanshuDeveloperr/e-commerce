import React from 'react'
import Footer from '../EssentialsLayout/Footer';
import Grid from '../EssentialsLayout/Grid';
import Header from '../EssentialsLayout/Header';
import Section from '../EssentialsLayout/Section';
import Products from '../Products/Products';
import CartProvider from '../Store/CartProvider';

const Store = () => {
  return(

   <CartProvider>

       <Header></Header>
         <Grid></Grid>
         <Section/>
         <Products></Products>
         <Footer/>
   </CartProvider>
  
    

  ) 
}

export default Store;