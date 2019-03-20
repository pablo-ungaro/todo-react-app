import { applyMiddleware, createStore, combineReducers } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { todoReducer } from './todo/reducers'
import { todoSaga } from './todo/sagas'

export const history = createBrowserHistory()

export const rootReducer = combineReducers({
  todo:todoReducer,
  router: connectRouter(history),
})

export function* rootSaga() {
  yield all([fork(todoSaga)])
}

export default function configureStore( initialState ){
  const composeEnhancers = composeWithDevTools({})
  const sagaMiddleware = createSagaMiddleware()
  
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)
  return store
}