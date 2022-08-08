type Fighter = {
  name: string;
  health: number;
  power: number;
  source: string;
  image: string;
};

type Fighters = {
  [x: string]: any;
  [Fighter: Fighter]: Fighter[];
};
