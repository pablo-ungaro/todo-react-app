import * as TodoActionTypes  from './types'

export const todoReducer = (state = {loading:false, todos:[]}, action) => {
  switch (action.type) {
    case TodoActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case TodoActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case TodoActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    case TodoActionTypes.CREATE_REQUEST: {
      return { ...state, loading: true , data: action.payload }
    }
    case TodoActionTypes.CREATE_SUCCESS: {
      return { ...state, loading: false , todo: action.payload }
    }
    default: {
      return state
    }
  }
}

