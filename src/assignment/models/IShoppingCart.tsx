export interface IProduct {
    id: number;
    name: string;
    price: number;
    quantity: number
}

export interface Action {
    type: string;
    productId: number
}

export interface State {
    products: IProduct[];
    addedToCart: IProduct[];
}