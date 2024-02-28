import React from 'react'
import "./ShoppingCart.css"
import Product from './Product'
import { IProduct } from './models/IShoppingCart'

const ProductList: React.FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <div className='product-list'>
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <p>Product List</p>
      </div>
        {
            products.map(product => <Product product={product}/>)
        }
    </div>
  )
}

export default ProductList