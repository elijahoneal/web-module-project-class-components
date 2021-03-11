import React from 'react'

const TodoForm = props => {
console.log(props)
        return(
            <form onSubmit={props.handleSubmit}>
                <input
                type='text'
                onChange={props.handleChange}
                value={props.value}
                />
                <button>Add</button>
            </form>
        )
}

export default TodoForm