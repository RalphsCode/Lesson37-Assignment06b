import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

/** Form to add a new Todo to the list.
 * addTodo function is passed in as a prop from TodoList.js
 */
const NewTodoForm = ( ({addTodo}) => {
    const [formData, setFormData] = useState({ item: "" });

    // function to process the form when form submitted.
    const handleSubmit = ( (evt) => {
        evt.preventDefault();
        // Add a unique ID number
        const newID = {...formData, id:uuid()};
        // Add the new item to the list in state at TodoList
        addTodo(newID);
        // Reset the form
        setFormData({ item: "" })
    })

    // Update the state when the user types in the input
    const handleChange = ( (evt)=> {
        const { name, value } = evt.target ;
        setFormData( (data) => ({...data, [name]: value}))
    })

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            name='item'
            placeholder={formData.item}
            value={formData.item}
            onChange={handleChange}/>
            <button>Add ToDoList</button>
        </form>
    )
})

export default NewTodoForm;