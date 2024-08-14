import React, { useState } from "react";
import { useAddProductMutation } from "../store";

import cl from "./Input.module.css";

export default function Input() {
  const [newProduct, setNewProduct] = useState("");
  const [addProduct, { isError, error }] = useAddProductMutation();

  const handleAddProduct = async () => {
    if (newProduct !== "") {
      await addProduct({ name: newProduct }).unwrap();
      setNewProduct("");
    }
  };

  const buttonAddProduct = async (event) => {
    if (event.key === "Enter") {
      await handleAddProduct();
    }
  };

  return (
    <>
      <div className={cl.input_wrapper}>
        {isError && <div>Error: {error.message}</div>}

        <input
          autoFocus
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          onKeyDown={buttonAddProduct}
          placeholder="Product"
          className=" border-white border-2 p-[0.4rem] m-1 rounded bg-transparent text-white text-lg focus:outline-none placeholder-white"
        />
        <button className={cl.button_create} onClick={handleAddProduct}>
          Create
        </button>
      </div>
    </>
  );
}
