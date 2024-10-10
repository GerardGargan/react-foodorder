import headerImg from '../assets/logo.jpg';
import Button from './UI/Button';
import { useContext } from 'react';
import CartContext from '../store/CartContext';

export default function Header() {
    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={headerImg} />
                <h1>REACTFOOD</h1>
            </div>
            <Button textOnly>Cart ({totalCartItems})</Button>
        </header>
    );
}