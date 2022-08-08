import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { API, BASE_URL } from "./services";

function App() {
  const [fighters, setFighters] = useState<Fighters | null>(null);
  useEffect(() => {
    const getAllFighters = async () => {
      const response: AxiosResponse<Fighters> = await API.getAll(BASE_URL);
      setFighters(response.data);
    };

    getAllFighters();
  }, []);
  return (
    <div className="App">
      {fighters &&
        fighters.map((fighter: Fighter) => {
          return <div>{fighter.name}</div>;
        })}
    </div>
  );
}

export default App;
