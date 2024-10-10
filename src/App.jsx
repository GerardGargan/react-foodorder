import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";

import { CartContextProvider } from "./store/CartContext";

function App() {

  return (
    <CartContextProvider>
      <Modal />
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
