import React, {useEffect, useState} from 'react';
import { MostrarItem } from '../Item/Item';
import './ItemListContainer.css'
import products from '../../utils/products';
import customFetch from '../../utils/customFetch';
import ItemList from '../ItemList/ItemList'

export const ContainerDeProductos = () => {


    const [items,setItems] = useState([]);

    useEffect( () => {

        customFetch(3000,products)
        .then (result => setItems(result))}, [])

    return <section className='ContainerProductos'>
        <ItemList products={items}/>
    </section>

}

