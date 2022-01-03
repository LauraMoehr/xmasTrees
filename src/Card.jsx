import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {saveToLocal, loadFromLocal} from './lib/localStorage'

export default function Card({products}) {

    const [favs, setFavs] = useState(loadFromLocal('_favs') ?? []);
    useEffect(() => saveToLocal('_favs', favs), [favs])

    const isInFavs = favToAdd => favs.some((fav) => fav.id === favToAdd.id)

    const removeFromFavs = product => favs.filter((fav) => fav.id !== product.id)

    function addToFavs(favToAdd) { //Stern auswechseln in beide Richtungen
        if (isInFavs(favToAdd)) {
          const favsToKeep = removeFromFavs(favToAdd)
          setFavs(favsToKeep)
        } else {
          setFavs([...favs, favToAdd])
        }
      }
    return (
        <>
            {products.map((product, index) => (
                <ContainerItem>
                <article key={index}>
                    <h3>{product.name}</h3>
                    <p>
                    {product.price} €
                    </p>
                    <p>Category: {product.category}</p>
                    <p>Size: {product.size}</p>
                    <p>
                        {product.tags.sort().join(', ')}
                    </p>
                    <FavouriteItem onClick={() => addToFavs(product)}>
                        {isInFavs(product)? '🌟' : '✨'}
                    </FavouriteItem>
                </article>
                </ContainerItem>
            ))}
        </>
    )
}


const ContainerItem = styled.div`
  max-width: 20rem;
  margin: 20px;
  background-color: #f8b229;
  position: relative;
  border: 2px solid #165b33;
  padding: 10px;
`
const FavouriteItem = styled.span`
  font-size: 2rem;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
`