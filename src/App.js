import { useState } from "react";
import { useGetGoodsQuery, useAddProductMutation } from "./store";

function App() {
  const [count, setCount] = useState("");
  const { data, isLoading } = useGetGoodsQuery(count);
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
    <div className="App">
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}

      <div>
        <input
          autoFocus
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          onKeyDown={buttonAddProduct}
        />
        <button onClick={handleAddProduct}>Create</button>
      </div>
      <div>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
