import React, {Component} from 'react';
import TaskItems from './TaskItems';

class TaskList extends Component{
    render(){
        return (
            <div>
                Title of Task
                <TaskItems />
                <button>Done/Delete</button>
            </div>
        )
    }
}

export default TaskList;