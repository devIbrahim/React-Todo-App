import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(todoValue) {
    todoValue = todoValue.trim();
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: "",
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  }

  updateInput(inputVal) {
    this.setState({
      newItem: inputVal,
    });
  }

  render() {
    return (
      <div>
        <img className="logo" src={logo} width="100" height="100" />
        <h1 className="app-title">React ToDo App</h1>
        <div className="container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.addItem(this.state.newItem);
            }}
          >
            <input
              type="text"
              className="add-todo-input"
              placeholder="Add a todo...."
              required
              value={this.state.newItem}
              onChange={(e) => this.updateInput(e.target.value)}
            />
            <button className="add-todo-btn" type="submit">
              Add
            </button>
          </form>
          <ul className="todo-list">
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  <div className="flex">
                    <input
                      type="checkbox"
                      name="isDone"
                      // checked={item.isDone}
                      onChange={() => {}}
                    />
                    <p>{item.value}</p>
                  </div>
                  <button
                    onClick={() => this.deleteItem(item.id)}
                    className="delete-todo-btn"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
