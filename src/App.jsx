import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";

import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UerProgressContext";

function App() {

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Modal />
        <Header />
        <Meals />
        <Cart/>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
