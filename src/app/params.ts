interface Model {
  name: string;
  params: object;
}

interface Algorithm {
  name: string;
  params: object;
}

export interface Params {
  model: Model;
  algorithm: Algorithm;
}
