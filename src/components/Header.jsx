import headerImg from '../assets/logo.jpg';
import Button from './UI/Button';

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={headerImg} />
                <h1>REACTFOOD</h1>
            </div>
            <Button textOnly>Cart (0)</Button>
        </header>
    );
}