import React, {useState} from 'react';
import Todo from './Todo';

const TodoList = () => {
    const InitialState = [
        {id: 1, item: "Take Shower"},
        {id: 2, item: "Walk Ralph"},
        {id: 3, item: "Do Laundry"}
    ]
    const [list, setList] = useState(InitialState);

    const removeItem = ((id) => {
        const updatedList = list.filter((item) => item.id !== id);
        setList(() => updatedList);
    })
    
    const currentList = list.map( (item) => (
            <Todo  task={item} remove={removeItem} />
        ) )

     return (
        <ol>{currentList}</ol>
     )
}  // END TodoList()

export default TodoList;