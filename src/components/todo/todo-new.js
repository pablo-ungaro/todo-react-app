import React, { Component } from 'react'
import { Form, Input, Button, Card } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../../store/todo/actions'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class TodoNew extends Component {

  componentDidMount() {
    this.props.form.setFieldsValue({
      userId: '1',
    });
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.createRequest(values)
        this.props.history.push(`/todos`)
      }
    });
  }

  goToHomePage = ()=>{
    this.props.history.push('/todos')
  }

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Card
      title="Nova Tarefa"
      extra={<a href="javascript:void(0)" onClick={this.goToHomePage}>Principal</a>}
      style={{margin:'50px'}}
      >
        <Form {...formItemLayout} onSubmit={this.handleSubmit} >
          <Form.Item label="Título">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Título obrigatório!' }],
            })(
              <Input style={{width:'34%'}} />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('userId', {})(
              <Input type='hidden'/>
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>Cadastrar</Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}


const TodoNewForm = Form.create({ name: 'todo-new' })(TodoNew);

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  createRequest: (todo) => dispatch(actions.createRequest(todo)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoNewForm)
