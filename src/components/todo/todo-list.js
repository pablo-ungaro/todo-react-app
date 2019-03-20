import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/todo/actions'
import { Table, Card } from 'antd'
import { Link } from 'react-router-dom'



const columns = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'Título',
  dataIndex: 'title',
  key: 'title',
}, {
  title: 'Usuário',
  dataIndex: 'userId',
  key: 'userId',
},
{
  title: 'Finalizado',
  dataIndex: 'completed',
  key: 'completed',
  render: (text, record) => (
    <span>
      {record.completed? 'Sim': 'Não'}
    </span>
  )
}];
class TodoList extends Component {
  
  render() {
    return (
      <Card
      title="Tarefas"
      extra={<Link to="/todo/new">Adicionar</Link>}
      style={{margin:'50px'}}
      >
        <div>
          {!this.props.loading && <Table columns={columns} dataSource={this.props.todos} rowKey='id' />}
        </div>
      </Card>
    );
  }

  componentDidMount(){
    this.props.fetchRequest()
  }
}

const mapStateToProps = (state) => ({
  todos: state.todo.data,
  loading: state.todo.loading
})

const mapDispatchToProps = (dispatch) => ({
  fetchRequest: () => dispatch(actions.fetchRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)