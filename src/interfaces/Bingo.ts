export interface BingoValues {
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  a5: string;
  b1: string;
  b2: string;
  b3: string;
  b4: string;
  b5: string;
  c1: string;
  c2: string;
  c3: string;
  c4: string;
  c5: string;
  d1: string;
  d2: string;
  d3: string;
  d4: string;
  d5: string;
  e1: string;
  e2: string;
  e3: string;
  e4: string;
  e5: string;
}

export interface BingoDB extends BingoValues {
  name: string;
  createdAt?: string;
  updatedAt?: string;
  colors: {
    text: string;
    background: string;
    border: string;
    _id?: string;
  };
  _id?: string;
  __v?: number;
  description: string;
}

export const STARTING_STATE: BingoValues = {
  a1: '',
  a2: '',
  a3: '',
  a4: '',
  a5: '',
  b1: '',
  b2: '',
  b3: '',
  b4: '',
  b5: '',
  c1: '',
  c2: '',
  c3: 'FREE!',
  c4: '',
  c5: '',
  d1: '',
  d2: '',
  d3: '',
  d4: '',
  d5: '',
  e1: '',
  e2: '',
  e3: '',
  e4: '',
  e5: '',
};

export const BINGO_IDS = [
  'a1',
  'a2',
  'a3',
  'a4',
  'a5',
  'b1',
  'b2',
  'b3',
  'b4',
  'b5',
  'c1',
  'c2',
  'c3',
  'c4',
  'c5',
  'd1',
  'd2',
  'd3',
  'd4',
  'd5',
  'e1',
  'e2',
  'e3',
  'e4',
  'e5',
];

export const BINGO_CHECKED_FIELDS = {
  a1: false,
  a2: false,
  a3: false,
  a4: false,
  a5: false,
  b1: false,
  b2: false,
  b3: false,
  b4: false,
  b5: false,
  c1: false,
  c2: false,
  c3: false,
  c4: false,
  c5: false,
  d1: false,
  d2: false,
  d3: false,
  d4: false,
  d5: false,
  e1: false,
  e2: false,
  e3: false,
  e4: false,
  e5: false,
};
