import { useState } from 'react';
import styled from 'styled-components';
import Textinput from './Textinput';
import Numberinput from './Numberinput';
//import New from './New';
import ProductTags from './ProductTags';
import isValid from './lib/validation.js';
import {v4 as uuidv4}  from 'uuid';


export default function Form({onAddProduct}) {
    const initialProduct = {
        name: '',
        price: 0,
        isDecorated: false,
        category: '',
        size: '',
        tags: ['lecker snackig'],
        contact: '',
      };

    const [product, setProduct] = useState(initialProduct);

    const handleChange = (event) => {
        let inputValue = event.target.value;
        if (event.target.type === 'checkbox') {
          inputValue = event.target.checked;
        }
        setProduct({
          ...product,
          [event.target.name]: inputValue,
        });
      };
    
      function updateTags(tag) {
        setProduct({...product, tags: [...product.tags, tag]})
      }
    
      function deleteTag(clickedTag) {
        const newTags = product.tags.filter((everyTag) => everyTag !== clickedTag);
        setProduct({...product, tags: newTags});
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (isValid(product)) {
          onAddProduct({ id: uuidv4(), ...product }) //id hinzugefügt
        }
      };
    
    return (
        <FormElements onSubmit={handleSubmit}>
          <Textinput name="name" value={product.name} onTextInputChange= {handleChange}>
            Tree Name:
          </Textinput>
          <Numberinput name="price" value={product.price} onNumberInputChange= {handleChange}>
            Price in €:
          </Numberinput>
          <Checkbox>
            <input type="checkbox" name="isDecorated" id="isDecorated" onChange={handleChange} checked={product.isDecorated}/>
            Decorated
          </Checkbox>
          {/* <label htmlFor="category">Choose Category</label>
          <select defaultValue="" name="category" id="category" value={product.category} onChange={handleChange}>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select> */}
          {/* <label>Baumgröße:</label>
          <input type="radio" name="size" value="S" onChange={handleChange} checked={product.size === 'S'}/>S
          <input type="radio" name="size" value="M" onChange={handleChange} checked={product.size === 'M'}/>M
          <input type="radio" name="size" value="L" onChange={handleChange} checked={product.size === 'L'}/>L
          <input type="radio" name="size" value="XXXXL" onChange={handleChange} checked={product.size === 'XXXXL'}/>XXXXL<br/> */}

          
          <ProductTags tags={product.tags} onDeleteTag={deleteTag} onUpdateTags={updateTags}/>

          <label htmlFor="contact">Contact:</label>
          <input type="text" id="contact" name="contact" onChange={handleChange} value={product.contact}/><br/>

          <button type="submit">Send</button>
          <button type="reset" onClick={() => setProduct(initialProduct)}>Cancel</button>
        </FormElements>
        
    )
}


const FormElements = styled.form`
label {
  display: block;
  margin: 20px;
}
input {
  padding: 0.25rem;
}
`
const Checkbox= styled.div`
opacity: 1;
`