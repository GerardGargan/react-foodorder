import { createContext, useReducer } from "react";

export const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function cartReducer(state, action) {
    if(action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if(existingCartItemIndex > -1) {
            // item already exists
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            // item doesnt exist, add it
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems }
    }

    if(action.type === 'REMOVE_ITEM') {
        // remove an item from the state
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems = null;
        if(existingCartItem.quantity === 1) {
            // remove item
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            // decrement by 1
            const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity -1 }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return { ...state, items: updatedItems }

    }

    return state;
}

export function CartContextProvider({children}) {
    const [ cart, dispatchCartAction ] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item
        });
    }

    function removeItem(id) {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id
        });
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    };

    return (<CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>)
}

export default CartContext;