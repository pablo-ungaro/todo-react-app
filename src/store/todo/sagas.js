import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import * as TodoActionTypes from './types'
import { fetchError, fetchSuccess, createSuccess } from './actions'
import { getAllTodos, createTodo } from '../../api/todo'

function* handleFetch(action) {
  try {
    const res = yield call(getAllTodos, action.payload)
    if (res.error) {
      yield put(fetchError(res))
    } else {
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* handleCreate(action) {
  try {
    const res = yield call(createTodo, action.payload)
    if (res.error) {
      yield put(fetchError(res))
    } else {
      yield put(createSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(TodoActionTypes.FETCH_REQUEST, handleFetch)
}

function* watchCreateRequest() {
  yield takeEvery(TodoActionTypes.CREATE_REQUEST, handleCreate)
}

export function* todoSaga() {
  yield all([fork(watchFetchRequest), fork(watchCreateRequest)])
}