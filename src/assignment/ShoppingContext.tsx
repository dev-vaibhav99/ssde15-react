import React, {Dispatch} from "react";
// import { initialStateK } from "./ShoppingCart";
import { Action, State } from "./models/IShoppingCart";

const initialState: State = {
    products: [{ id: 1, name: "Laptop", price: 50000, quantity: 1 }, { id: 2, name: "Tablet", price: 20000, quantity: 1 }],
    addedToCart: []
}

const ShoppingContext = React.createContext<{
    state: State;
    dispatch: Dispatch<Action>;
  }>({
    state: initialState,
    dispatch: () => null
  });

export default ShoppingContext;