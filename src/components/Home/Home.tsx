import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { deleteTodo } from '../../actions/home.actions';
import { TodoItem } from '../../models/todo-item';
import { State } from '../../reducers/index';
import { getTodosList } from '../../selectors/todos.selectors';
import AddTodoForm from './AddTodoForm';
import './Home.scss';

interface Props {
  todos: TodoItem[],
  handleDeleteTodo: (todoId: number) => void
}

const mapStateToProps = (state: State) => ({
  todos: getTodosList(state)
})

const mapDispatchToProps = {
  handleDeleteTodo: deleteTodo
}

class Home extends Component<Props, State> {

  public deleteTodo = (id: number) => {
    this.props.handleDeleteTodo(id);
  }

  public render() {
    const { todos } = this.props
    return (
      <div>
        <h1>Todos</h1>
        <AddTodoForm />
        <ul>
          {
            todos.map((todo) => (
              <li key={todo.id}>
                {todo.text}
                <button onClick={this.deleteTodo.bind(this, todo.id)}>Delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Home);
