import React, { useState, useEffect } from "react";
import { HiPlusSm } from "react-icons/hi";
import "../css/App.css";
function Form({ setItems, items, handleTotalItems }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("try with more letters");
  useEffect(() => {
    setError("");
  }, [inputValue]);
  const handleCleanTheList = () => {
    setItems([]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const addNewItemsToList = () => {
    setError("");
    if (inputValue.trim().length > 2) {
      if (
        inputValue.trim() !== null &&
        inputValue.trim() !== "" &&
        inputValue !== " "
      ) {
        const item = { itemName: inputValue, quantity: 1, isSelected: true };
        const newItems = [...items, item];
        setItems(newItems);
        setInputValue("");
        handleTotalItems.current();
      } else return null;
    } else
      return setError(
        "*You need to write a longer words and avoid blank spaces"
      );
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mb-8 flex text-center w-full overflow-auto"
      >
        <button
          type="submit"
          onClick={() => addNewItemsToList()}
          className="text-black font-semibold "
        >
          <HiPlusSm style={{ fontSize: 28, top: 178 }} className="absolute" />
        </button>

        <input
          type="text"
          placeholder=" Add an items"
          value={inputValue || ""}
          onChange={(e) => setInputValue(e.target.value)}
          maxLength={18}
          className="mr-4 p-2 w-full border border-red-400 rounded pl-8"
        />

        <button
          onClick={() => handleCleanTheList()}
          className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded  "
        >
          Clean
        </button>
      </form>
      <div className="error-message mb-12">
        <div className="text-red-500">{error}</div>
      </div>
    </div>
  );
}

export default Form;
