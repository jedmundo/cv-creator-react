import * as React from 'react';

interface TodoComponent {
  onClick?: () => {};
  text: string;
  completed?: boolean;
}

const Todo = ({ onClick, completed, text }: TodoComponent) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo;
