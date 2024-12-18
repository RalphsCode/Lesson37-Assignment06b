import React, {useState} from 'react';

const Todo = ( ({task, remove}) => {
    return(
                <li>
                    <button onClick={ () => remove(task.id)}>X</button>&nbsp;
                    {task.item} 
                </li>
    )
} )  // END Todo()

export default Todo;