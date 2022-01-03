import { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import {saveToLocal, loadFromLocal} from './lib/localStorage';
import Form from './ProductForm';
import Card from './Card';


function App() {

  const [products, setProducts] = useState(loadFromLocal('_products') ?? []);
  useEffect(() => saveToLocal('_products', products), [products]);
  const addProduct= (product) => setProducts([...products, product]) //eckige Klammern hier!

  return (
    <div className="App" style={{ 
      backgroundImage: `url("https://cdn.pixabay.com/photo/2016/11/29/03/46/christmas-tree-1867135_1280.jpg")`}}>
      <ContainerForm>
        <header className="App-header">🎄Add a new christmas tree here!🎄🎄</header>
        <Form onAddProduct={addProduct}/>
      </ContainerForm>
      <Card products={products}/>
    </div>
  )
}

export default App

const ContainerForm = styled.div`
  max-width: 20rem;
  margin: 20px;
  background-color: #f8b229;
  position: relative;
  border: 2px solid #165b33;
  padding: 10px;
`
