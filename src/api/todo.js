import callApi from '../util/callApi'

export const getAllTodos = ( ) =>  callApi('get', '/todos', null)
export const createTodo = ( todo) =>  callApi('post', '/todos', todo)
