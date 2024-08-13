import { useState } from "react";
import { useGetGoodsQuery } from "./store";

function App() {
  const [count, setCount] = useState("");
  const { data, isLoading } = useGetGoodsQuery(count);

  return (
    <div className="App">
      {isLoading && <div>Loading...</div>}

      <select value={count} onChange={(e) => setCount(e.target.value)}>
        <option value="">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
