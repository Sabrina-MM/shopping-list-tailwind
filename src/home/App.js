import React, { useState, useEffect, useRef } from "react";
import { BsCircle } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { BsListTask } from "react-icons/bs";
import Header from "../components/Header";
import Form from "../components/Form";
import "../css/App.css";

function App() {
  const [items, setItems] = useState([
    { itemName: "banana", quantity: 3, isSelected: true },
    { itemName: "cake", quantity: 1, isSelected: true },
    { itemName: "tomatoes", quantity: 3, isSelected: true },
  ]);
  const [totalItems, setTotalItems] = useState(7);
  const handleTotalItems = useRef(() => {});

  useEffect(() => {
    handleTotalItems.current();
  }, [items]);

  const handleCheck = (index) => {
    const newItem = [...items];
    newItem[index].isSelected = !newItem[index].isSelected;
    setItems(newItem);
  };

  const increaseQuantityItems = (index) => {
    if (items[index].quantity < 9) {
      const newItems = [...items];
      newItems[index].quantity++;
      setItems(newItems);
      handleTotalItems.current();
    } else return null;
  };
  const decreaseQuantityItems = (index) => {
    if (items[index].quantity > 0) {
      const newItems = [...items];
      newItems[index].quantity--;
      setItems(newItems);
      handleTotalItems.current();
    } else return null;
  };

  handleTotalItems.current = () => {
    const newTotal = [...items].reduce((total, currentItem) => {
      return (total += currentItem.quantity);
    }, 0);
    setTotalItems(newTotal);
  };

  const deleteSelectedItem = (index) => {
    const newItems = [...items];

    const result = newItems.filter((item, i) => i !== index);
    setItems(result);
  };

  return (
    <div className="App m-1 lg:m-5 ">
      <div className="container mx-auto font-thin border-2 lg:w-3/6 max-w-full border-dotted  border-grey-600 pb-20">
        <Header />
        <hr className="mt-10 border-double border-4 border-grey-600 " />
        <div className="content p-5 ">
          <Form
            items={items}
            setItems={setItems}
            handleTotalItems={handleTotalItems}
          />
          {totalItems !== 0 ? (
            <>
              {items.map((item, index) => {
                return (
                  <div
                    className="flex justify-between text-xl overflow-auto"
                    key={index}
                  >
                    {item.isSelected ? (
                      <div
                        className="inline-flex mb-4"
                        onClick={() => handleCheck(index)}
                      >
                        <span className="inline-flex">
                          <BsCircle className="mr-2 mb-4" />
                        </span>
                        <span>{item.itemName}</span>
                      </div>
                    ) : (
                      <div
                        className="inline-flex line-through mb-4"
                        onClick={() => handleCheck(index)}
                      >
                        <span>
                          <BsCheckCircle className="mr-2 mb-4 " />
                        </span>
                        <span>{item.itemName}</span>
                      </div>
                    )}
                    <div className="flex">
                      <span onClick={() => decreaseQuantityItems(index)}>
                        <MdArrowBackIos />
                      </span>
                      <span className="mr-1">{item.quantity}</span>
                      <span onClick={() => increaseQuantityItems(index)}>
                        <MdArrowForwardIos />
                      </span>
                      <span onClick={() => deleteSelectedItem(index)}>
                        <TiDeleteOutline />
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="p-10 text-center">
              <ul>
                <li className="border border-gray-200 p-3 inline-block rounded-xl mb-5">
                  <BsListTask style={{ fontSize: 50 }} />
                </li>
                <li>
                  <strong>Your List is Empty</strong>
                </li>
                <li>
                  <p>
                    Start adding things that you need to make sure that nothing
                    is left behind.
                  </p>
                </li>
              </ul>
            </div>
          )}
          <div className="flex justify-center mr-2 mt-6">
            <i>Total Items</i>:
            <span className="text-red-400 text-xl ml-3">{totalItems}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
