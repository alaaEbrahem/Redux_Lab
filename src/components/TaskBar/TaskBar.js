import React from 'react';
import uuidv4 from 'uuid/v4';
import {MyContext} from '../../App'

class TodoForm extends React.Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ text: value });
  }

  handleSubmit= (addTodo)=> (e) => {
    e.preventDefault();
    if (!this.state.text) return;
    const todo = {
      text: this.state.text, completed: false, deleted: false, id: uuidv4(),
    };
    addTodo(todo);
    this.setState({ text: '' });
  }

  render() {
    return (
      <MyContext.Consumer>
         {value => (
        <form  onSubmit={this.handleSubmit(value.addToDo)} class="form-inline mb-4 mt-3">
        <div className="mb-2 col-4" ></div>
        <div class="form-group  mx-sm-3 mb-2">
            <input onChange={this.handleChange}  type="text" class="form-control" id="taskName" placeholder="task name .." value={this.state.text} />
        </div>
        <button  type="submit" class="btn btn-info">Add Task</button>

    </form>
   )}
    </MyContext.Consumer>
    );
  }
}



export default TodoForm;

