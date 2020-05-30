
import React from 'react';
import { TaskItem } from "./taskItem.js";
import Table from "react-bootstrap/Table"

class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { taskList: [...props.taskList] };
    }
    render() {
        return <Table>
            <tbody>
                {this.props.taskList.sort((a,b) => a.id-b.id).map((task) => (<TaskItem key={task.id} task={task} deleteTask={this.props.deleteTask}
                 completedTask={this.props.completedTask} />))}
            </tbody>
        </Table>
    }

}

export { TaskList }