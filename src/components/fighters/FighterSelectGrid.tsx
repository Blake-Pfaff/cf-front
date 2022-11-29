import { useQuery } from "react-query";
import { API, BASE_URL } from "../../services";
import { FighterSelectGridTile } from "./FighterSelectGridTile";

export const FighterSelectGrid = ({ Fighter }: any) => {
  // const { isLoading, data: fighters } = useQuery(["fighters"], () =>
  //   API.getAll(BASE_URL)
  // );
  console.log(Fighter, "< name");
  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      {/* <div className="grid grid-cols-4 border-t border-l">
        {fighters.data &&
          fighters.data.map((fighter: Fighter, index: number) => {
            return <FighterSelectGridTile name={fighter.name} key={index} />;
          })}
      </div> */}
    </div>
  );
};
