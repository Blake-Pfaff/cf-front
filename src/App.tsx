import { AxiosResponse } from "axios";
import { API, BASE_URL } from "./services";
import { useQuery } from "react-query";

function App() {
  const { isLoading, data: fighters } = useQuery(["fighters"], () =>
    API.getAll(BASE_URL)
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      {fighters.data &&
        fighters.data.map((fighter: Fighter) => {
          return <div key={fighter.name}>{fighter.name}</div>;
        })}
    </div>
  );
}

export default App;
