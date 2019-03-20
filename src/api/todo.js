import callApi from '../util/callApi'

export const getAllTodos = ( ) =>  callApi('get', '/todos', null)
