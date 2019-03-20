import * as TodoActionTypes  from './types'

export const todoReducer = (state = {}, action) => {
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
    default: {
      return state
    }
  }
}

