import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store/todo/actions'
import {TodoItem} from './todo-item'

class TodoList extends Component {
  render() {
    return (
      <div>
          {(this.props.todos || []).map(todo => {
            return (<TodoItem todo={todo} key={todo.id}/>)
          })}
      </div>
    );
  }

  componentDidMount(){
    this.props.fetchRequest()
  }
  }

const mapStateToProps = (state) => ({
  todos: state.todo.data
})

const mapDispatchToProps = (dispatch) => ({
  fetchRequest: () => dispatch(actions.fetchRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)