import { FighterSelectGrid } from "../components/fighters";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { FighterCard } from "../components/FighterCard";
import { API, BASE_URL } from "../services";

export const BaseScreen = () => {
  const [fighters, setFighters] = useState([]);
  const { data } = useQuery(["fighters"], () => API.getAll(BASE_URL));
  useEffect(() => {
    console.log(data.data, "< data");
    setFighters(data.data);
  }, []);

  // setFighters(data);
  console.log(fighters, "<");
  return (
    <div className="m-4">
      <FighterCard />
      <FighterSelectGrid Fighters={fighters} />
    </div>
  );
};
