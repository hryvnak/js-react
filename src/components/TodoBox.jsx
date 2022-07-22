import React from "react";
import { uniqueId } from 'lodash';
import Item from "./Item";

export default class TodoBox extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTaskValue: ""
    }
  }

  renderTasks() {
    const { tasks } = this.state;
    if (tasks.length === 0) {
      return null;
    }
    return tasks.map(({ id, value }) => (
      <Item task={value} onRemove={this.handleRemoveTask(id)} key={id} />
    ))
  }

  handleRemoveTask = (id) => () => {
    const { tasks } = this.state;
    const filtered = tasks.filter((item) => item.id !== id);
    this.setState({tasks: filtered});
  }

  handleChange = (event) => {
    const { target } = event;
    this.setState({newTaskValue: target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { tasks, newTaskValue } = this.state;
    const newTask = { id: uniqueId('id_'), value: newTaskValue };
    this.setState({tasks: [newTask, ...tasks], newTaskValue: ""})
  }

  render() {
    const { newTaskValue } = this.state;
    return (
      <div>
        <div className="mb-3">
          <form onSubmit={this.handleSubmit} className="todo-form form-inline mx-3">
            <div className="form-group">
              <input onChange={this.handleChange} type="text" value={newTaskValue} required="" className="form-control mr-3" placeholder="I am going..." />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        { this.renderTasks() }
      </div>
    )
  }
}