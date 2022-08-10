type TitleProps = {
  name: string;

  onPress?: (id: number) => void;
};

export const FighterSelectGridTile = ({ name }: TitleProps) => {
  return (
    <div
      //change background color

      className="text-center border border-t-0 border-l-0 p-4 hover:text-white hover:bg-midnight"
    >
      {name}
    </div>
  );
};
