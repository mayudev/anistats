export interface Images {
  medium?: string
}

export interface Response<T, K extends string> {
  data: {
    [key in K]: T
  }
}
