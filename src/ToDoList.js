import React, {useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewToDoForm';

/** Function to display a todo list.
 * Has 3 initial todo's (initialState),
 * Can delete a todo with the X button.
 * Can add a todo using the input box.
 */
const TodoList = () => {
    const initialState = [
        {id: 1, item: "Take Shower"},
        {id: 2, item: "Walk Ralph"},
        {id: 3, item: "Do Laundry"}
    ]

    // Create a state to store the list of todo's
    const [list, setList] = useState(initialState);

    // function to remove a todo. Is passes to Todo child Component
    const removeItem = ((id) => {
        const updatedList = list.filter((item) => item.id !== id);
        setList(() => updatedList);
    })

    // function to add a new todo to the list stored in state
    const addTodo = ((todo) => {
        setList([...list, todo]);
    } )
    
    // Iterate over the current todo's and send each to Todo
    const currentList = list.map( (item) => (
            <Todo  task={item} remove={removeItem} />
        ) )

     return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            <p>{currentList}</p>
        </div>
     )
}  // END TodoList()

export default TodoList;