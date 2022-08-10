type TitleProps = {
  name: string;
  //TODO: add props for fighter image
  //TODO: add on press for fighter card
  onPress?: (id: number) => void;
};

export const FighterSelectGridTile = ({ name }: TitleProps) => {
  return (
    <div className="text-center border border-t-0 border-l-0 p-4 hover:text-white hover:bg-blue-500">
      {name}
    </div>
  );
};
