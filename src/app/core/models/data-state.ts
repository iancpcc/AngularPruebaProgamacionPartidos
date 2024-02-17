export enum DataState {
  'LOADING','LOADED','ERROR'
}

export interface AppState<T> {
  state: DataState,
  data?: T
  error?: any
}
