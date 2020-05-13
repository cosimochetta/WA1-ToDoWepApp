
import React from 'react';
import {TaskItem} from "./taskItem.js";

class TaskList extends React.Component{

    constructor(props){
        super(props);
        this.state = {taskList: [...props.taskList]};
    }
    render(){
        return <table class="table">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Project</th>
                    <th scope="col">Dhared</th>
                    <th scope="col">Deadline</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {this.state.taskList.map((task) => (<TaskItem key={task.id} task={task} />))}
            </tbody>
        </table>
    }

}

export {TaskList}