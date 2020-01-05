import React from 'react';
import Btn from './components/button'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      todoName: "",
      index: "",
      isEdit: false
    }
  }

  add = () => {
    let { todoName, list } = this.state;

    list.push(todoName)
    this.setState({ list, todoName: "" })
  }

  edit = () => {
    let { todoName, index, list } = this.state;
    list.splice(index, 1, todoName);
    this.setState({ list, todoName: "" })
  }

  delete = (ind) => {
    let { list } = this.state;
    list.splice(ind, 1)
    this.setState({
      list,
    })
  }

  render() {

    let { todoName, index, isEdit, list } = this.state;
    console.log(list)
    return (
      <div className="App">
        <h1>Todo List</h1>
        <input type="text" value={todoName} onChange={(e) => { this.setState({ todoName: e.currentTarget.value }) }} />

        <button onClick={isEdit ? this.edit : this.add}> {isEdit ? "Edit" : "Add"}</button>
        <ul>
          {list.map((val, ind) => {
            return <div>
              <li>{val}</li>
              <span>
                <button onClick={() => {
                  this.setState({
                    isEdit: true,
                    todoName: val,
                    index: ind
                  })
                }}>Edit</button>
                <button onClick={() => {
                  this.delete(ind)
                }}>Delete</button>
              </span>
            </div>
          })}
        </ul>
      </div>
    )
  }
}

export default App;
