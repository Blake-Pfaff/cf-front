import { API, BASE_URL } from "./services";
import { useQuery } from "react-query";
import "./index.css";

function App() {
  const { isLoading, data: fighters } = useQuery(["fighters"], () =>
    API.getAll(BASE_URL)
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      {fighters.data &&
        fighters.data.map((fighter: Fighter) => {
          return (
            <div className="text-3xl font-bold underline" key={fighter.name}>
              {fighter.name}
            </div>
          );
        })}
    </div>
  );
}

export default App;
