import headerImg from '../assets/logo.jpg';
export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={headerImg} />
                <h1>REACTFOOD</h1>
            </div>
            <button className='cart-item-actions'>Cart (0)</button>
        </header>
    );
}