import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Item from "./components/Item";
import Cart from "./components/Cart";
function App() {
  return (
    <Provider store={store}>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="w-full max-w-lg p-6 bg-white rounded-md shadow-lg">
          <h1 className="text-2xl font-normal mb-4 text-center">Shopping Cart</h1>
          <Item />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}
export default App;
