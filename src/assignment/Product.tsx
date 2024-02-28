import React, { useContext } from 'react'
import { IProduct } from './models/IShoppingCart'
import ShoppingContext from './ShoppingContext'
import { ADD_TO_CART } from './ShoppingCart'

const Product: React.FC<{ product: IProduct }> = ({ product })  => {

  const shoppingContext = useContext(ShoppingContext)

  return (
    <div className='product'>
        <div>{product.name} {product.price}</div>
        <button onClick={() => shoppingContext.dispatch({type: ADD_TO_CART, productId: product.id})}>Add to cart</button>
    </div>
  )
}

export default Product