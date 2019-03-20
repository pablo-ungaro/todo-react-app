import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/todo/actions'
import { Table, Button, Card } from 'antd';


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

  goToAddPage = ()=>{
    this.props.history.push('/todo/new')
  }
  
  render() {
    return (
      <Card
      title="Tarefas"
      extra={<a href="javascript:void(0)" onClick={this.goToAddPage}>Adicionar</a>}
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