import { useGetGoodsQuery } from "./store";

function App() {
  const { data, isLoading } = useGetGoodsQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
