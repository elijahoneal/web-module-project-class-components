import React from 'react';
import styled from 'styled-components'
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

const StyleApp = styled.div`
margin: 5rem auto;
width:50%;
display:flex;
flex-direction:column;
align-items:center;
background-color: #85B8AF;
color:#FAFBFB;
  
`

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
        id: Date.now,
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
    this.setState({ taskName: '' })

  }

  toggleCompleted = taskId => {
    this.setState({ list: this.state.list.map( task => {
      if(task.id === taskId){
        return{ ...task, completed: !task.completed}
      }
      return(task)
    } ) })
  }
  clearCompleted = () => {
    this.setState({ list: this.state.list.filter( task =>{ return !task.completed} )} )
  }

  render() {
    return (
      <StyleApp>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm value={this.state.taskName} handleChange={this.handleChange} handleSubmit={this.handleSubmit} clearCompleted={this.clearCompleted}/>
        <TodoList toggleCompleted={this.toggleCompleted}  list={this.state.list}/>
      </StyleApp>
    );
  }
}

export default App;
