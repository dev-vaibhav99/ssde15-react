import React, { useContext, useMemo, useState } from 'react'
import { IProduct } from './models/IShoppingCart'
import "./ShoppingCart.css"
import ShoppingContext from './ShoppingContext';
import { REMOVE } from './ShoppingCart';

const Cart: React.FC<{ products: IProduct[] }> = ({ products }) => {
    const [totalAmount, setTotalAmount] = useState(0);
    const shoppingContext = useContext(ShoppingContext);
    useMemo(() => {
        const sum: number = products.reduce((accumulator: number, currentValue: IProduct) => {
            return accumulator + (currentValue.price * currentValue.quantity);
        }, 0)
        setTotalAmount(sum);
    }, [products]);
    return (
        <div className='cart'>
            <h4>Cart</h4>
            {products.map(product =>
            (
                <div className='cart-inner'>
                    <div>{product.name} ₹ {product.price}  {product.quantity}</div>
                    <button onClick={() => shoppingContext.dispatch({type: REMOVE, productId: product.id})}>Remove</button>
                </div>
            ))}
            <hr />
            {
                products.length > 0 ? <div>Total amount : ₹ {totalAmount}</div> : <p>Your cart is empty !</p>
            }
        </div>
    )
}

export default Cart