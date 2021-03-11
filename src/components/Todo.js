import React from 'react'

const Todo = props => {
    console.log(props)
    return (
        <div onClick={() => props.toggleCompleted(props.item.id)}>
            <p>{props.item.task}</p>
            <p>{props.item.completed ? 'complete' : ''}</p>
        </div>
    )
}

export default Todo