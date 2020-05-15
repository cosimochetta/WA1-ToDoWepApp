
import React from 'react';
import {TaskItem} from "./taskItem.js";

class TaskList extends React.Component{

    constructor(props){
        super(props);
        this.state = {taskList: [...props.taskList]};
    }
    render(){
        return <table class="table">
            <tbody>
                {this.props.taskList.map((task) => (<TaskItem key={task.id} task={task} />))}
            </tbody>
        </table>
    }

}

export {TaskList}