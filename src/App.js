
import { Fragment } from 'react';
import './App.css';
import Grid from './Components/EssentialsLayout/Grid';
import Header from "./Components/EssentialsLayout/Header";
import Section from './Components/EssentialsLayout/Section';
import Products from './Components/Products/Products';

function App() {
  return (
    <Fragment>
      <Header/>
      <Grid/>
      <Section/>
      <Products/>
    </Fragment>
  );
}

export default App;
