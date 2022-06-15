export interface Images {
  medium?: string
}

export interface Response<T, K extends string> {
  data: {
    [key in K]: T
  }
}

export interface PageInfo {
  total: number
  currentPage: number
  lastPage: number
  hasNextPage: boolean
  perPage: number
}
