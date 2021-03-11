import React from 'react'
import styled from 'styled-components'

const Task = styled.div`
margin: 0.5rem;
padding: 0.5rem 1rem;
background-color: #5F857E;
.item.completed {
    text-decoration: line-through;
    color:#283835;
  }
`

const Todo = props => {
    console.log(props)
    return (
        <Task onClick={() => props.toggleCompleted(props.item.id)}>
            <p className={`item${props.item.completed ? ' completed' : ''}`}>{props.item.task}</p>
     
        </Task>
    )
}


export default Todo