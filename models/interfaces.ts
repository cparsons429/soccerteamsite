export interface Name {
  first: string;
  last: string;
};

export interface Player {
  number: number;
  name: Name;
  pictureSrc?: URL;
};

export interface Players {
  list: {
    [key: string]: Player,
  };
};
