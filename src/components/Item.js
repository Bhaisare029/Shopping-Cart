import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

function Item() {
  const [itemName, setItemName] = useState("");
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (itemName.trim()) {
      const newItem = {
        id: Date.now(),
        name: itemName,
      };
      dispatch(addItem(newItem));
      setItemName("");
    }
  };
  return (
    <div className="mb-4 p-4 bg-gray-200 rounded-md">
      <h2 className="text-xl font-semibold mb-2">Add Item</h2>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-full"
        placeholder="Enter item name"
      />
      <button
        onClick={handleAddItem}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
export default Item;
