import * as React from 'react';
import { connect } from 'react-redux';

import { deleteTodo } from '../../actions/home.actions';
import { State } from '../../reducers/index';
import { getTodosList } from '../../selectors/todos';
import './Home.scss';
import Todo from './Todo';
import { TodoItem } from '../../models/todo-item';

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
    console.log('TOGGLE', id);
  }

  public render() {
    const { todos, onTodoDeleted } = this.props
    return (
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}
              onClick={this.deleteTodo}
              style={{ textDecoration: `${todo.done ? 'line-through' : ''}`, cursor: 'pointer' }}>
              {todo.name}
            </li>)
          )
        }
      </ul>
    );
  }
}

export default connect<any,any,any>(mapStateToProps, mapDispatchToProps)(Home);
