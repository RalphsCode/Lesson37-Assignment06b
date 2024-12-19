import React from 'react';

// displays each todo, with a remove button
const Todo = ( ({task, remove}) => {
    return(
        <div>
            <button onClick={ () => remove(task.id)}>X</button>&nbsp;
            {task.item} 
        </div>
    )
} )  // END Todo()

export default Todo;