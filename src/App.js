import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
const list =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Eat Cookies',
    id: 1527845,
    completed: false
  }

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list,
      taskName:''
    }
  }

  addTask = taskName => {
    this.setState({
      list: [...this.state.list, {
        task: taskName,
        id: uuidv4,
        completed: false
      }]
    })
  }

  handleChange = e => {
    this.setState({ taskName: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.addTask(this.state.taskName)

  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm value={this.state.taskName} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <TodoList list={this.state.list}/>
      </div>
    );
  }
}

export default App;
