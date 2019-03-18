import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

import { addTodo } from '../../actions/AddToDo';

class TodoForm extends React.Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ text: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text) return;
    const todo = {
      text: this.state.text, completed: false, deleted: false, id: uuidv4(),
    };
    this.props.addTodo(todo);
    this.setState({ text: '' });
  }

  render() {
    return (
        <form  onSubmit={this.handleSubmit} class="form-inline mb-4 mt-3">
        <div className="mb-2 col-4" ></div>
        <div class="form-group  mx-sm-3 mb-2">
            <input onChange={this.handleChange} ref="task" type="text" class="form-control" id="taskName" placeholder="task name .." value={this.state.text} />
        </div>
        <button  type="submit" class="btn btn-info">Add Task</button>

    </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(TodoForm);

