import * as React from 'react'
import { Route, Switch } from 'react-router'
import TodoNew from './components/todo/todo-new'
import TodoList from './components/todo/todo-list'

const Routes = () => (
  <div className='main'>
    <Switch>
      <Route exact path="/todos" component={TodoList} />
      <Route exact path="/todo/new" component={TodoNew} />
      
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </div>
)

export default Routes
