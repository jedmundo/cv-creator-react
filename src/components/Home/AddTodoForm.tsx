import * as React from 'react'
import { FormEvent } from 'react';
import { connect } from 'react-redux';

import { createTodo } from '../../actions/home.actions';

interface Props {
  handleSubmit: (value: string) => void
}
interface State {
  value: string
}

class AddTodoForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: '' }; // Value is empty by default
  }

  public updateValue = (e: any) => {
    this.setState({ value: e.target.value });
  }

  public handleSubmit = (e: FormEvent<any>) => {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }

    this.props.handleSubmit(this.state.value)
    this.setState({ value: '' });
  }

  public render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={value} onChange={this.updateValue} />
        <button type="submit">Add todo !</button>
      </form>
    )
  }
}

export default connect<any, any, any>(null, {
  handleSubmit: createTodo
})(AddTodoForm)
