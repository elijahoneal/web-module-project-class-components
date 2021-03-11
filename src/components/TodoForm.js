import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
display:flex;
flex-direction:column;
width:90%;
height: 8rem;
input {
    width:80%;
    height: 1.3rem;
    margin: 1rem auto;
}
button {
    color:#FAFBFB;
    background-color:#183832;
    box-shadow:none;
    border:none;
    margin: 0.25rem;
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
}
.buttonGroup {
    display:flex;
    justify-content:center;
}

`
const TodoForm = props => {
console.log(props)
        return(
            <Form onSubmit={props.handleSubmit}>
                <input
                type='text'
                onChange={props.handleChange}
                value={props.value}
                />
                <div className='buttonGroup'>
                <button>Add</button>
                <button onClick={props.clearCompleted}>Clear Completed</button>
                </div>
            </Form>
        )
}

export default TodoForm