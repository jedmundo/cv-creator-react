import * as React from 'react';
import { connect } from 'react-redux';

import { deleteTodo } from '../../actions/home.actions';
import { TodoItem } from '../../models/todo-item';
import { State } from '../../reducers/index';
import { getTodosList } from '../../selectors/todos';
import AddTodoForm from './AddTodoForm';
import './Home.scss';

interface Props {
  todos: TodoItem[],
  onTodoDeleted: (todoId: number) => void
}

const mapStateToProps = (state: State) => ({
  todos: getTodosList(state)
})

const mapDispatchToProps = {
  onTodoDeleted: deleteTodo
}

class Home extends React.Component<Props, State> {
  public input: any;

  public createTodo = (event: any) => {
    event.preventDefault()
    // if (!input.value.trim()) {
    //   return
    // }
    // dispatch(addTodo(input.value))
    // input.value = ''
    // this.props.createTodo();
  }

  public deleteTodo = () => {
    console.log('TOGGLE');
  }

  public render() {
    const { todos } = this.props
    return (
      <div>
        <h1>Todos</h1>
        <AddTodoForm />
        <ul>
          {
            todos.map(todo => (
              <li key={todo.id}
                onClick={this.deleteTodo}>
                {todo.text}
              </li>)
            )
          }
        </ul>
      </div>
    );
  }
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Home);
