import React, { useReducer } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'
import { Action, State } from './models/IShoppingCart'
import ShoppingContext from './ShoppingContext'

export const ADD_TO_CART = "ADD TO CART";
export const REMOVE = "REMOVE";

export const initialState: State = {
    products: [{ id: 1, name: "Laptop", price: 50000, quantity: 1 }, { id: 2, name: "Tablet", price: 20000, quantity: 1 }],
    addedToCart: []
}

const reducer = (state: State, action: Action) => {
    debugger;
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = state.addedToCart.find(prod => prod.id === action.productId)
            if (addedProduct) {
                addedProduct.quantity = addedProduct.quantity + 1;
                return {
                    ...state, // product list is copied
                    addedToCart: state.addedToCart.map((product) => product.id === addedProduct.id ? addedProduct : product) // [laptop, tablet]
                }
            }
            else {
                // else insert the product in cart
                const product = state.products.find(prod => prod.id === action.productId)
                console.log("product", addedProduct)
                if (product)
                    return {
                        ...state,
                        addedToCart: [...state.addedToCart, product]
                    }
                return state;
            }
        case REMOVE:
            const alreadyPresent = state.addedToCart.find(prod => prod.id === action.productId)
            if (alreadyPresent) {
                if (alreadyPresent.quantity > 0) {
                    alreadyPresent.quantity = alreadyPresent.quantity - 1;
                    return {
                        ...state, // product list is copied
                        addedToCart: state.addedToCart.map((product) => product.id === alreadyPresent.id ? alreadyPresent : product) // [laptop, tablet]
                    }
                } else {
                    const remaining = state.addedToCart.filter(prod => prod.id !== action.productId)
                    return {
                        ...state,
                        addedToCart: [...remaining]
                    }
                }
            }
            else return state;
        default:
            return state;
    }
}

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ShoppingContext.Provider value={{ state, dispatch }}>
            <div className='shopping-cart'>
                <div className='product-list'><ProductList products={state.products} /></div>
                <div><Cart products={state.addedToCart} /></div>
            </div>
        </ShoppingContext.Provider>
    )
}

export default ShoppingCart