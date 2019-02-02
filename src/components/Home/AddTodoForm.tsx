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
    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    const { value } = this.state;
    const { updateValue, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={updateValue} />
        <button type="submit">Add todo !</button>
      </form>
    )
  }

  private updateValue(e: any) {
    this.setState({ value: e.target.value });
  }

  private handleSubmit(e: FormEvent<any>) {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }

    this.props.handleSubmit(this.state.value)
    this.setState({ value: '' });
  }
}

export default connect<any, any, any>(null, {
  handleSubmit: createTodo
})(AddTodoForm)
