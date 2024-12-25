import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';
function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id)); 
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="space-y-4">
          {items.map(item => (
            <li key={item.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
              <span>{item.name}</span>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}     
export default Cart;