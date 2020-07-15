import React from 'react';
import { TaskList } from "./taskList.js"
import Col from "react-bootstrap/Col"

class MainContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			taskList: [...props.taskList],
			filter: props.filter
		};
	}

	render() {
		return <Col sm={9} className="below-nav" >
			<h1 class="bg-primary text-white d-inline-block p-2 rounded-top">{this.props.filter}</h1>
			<TaskList taskList={this.props.taskList} addTask={this.props.addTask} deleteTask={this.props.deleteTask} 
			completedTask={this.props.completedTask}></TaskList>
		</Col>
	}
}

export { MainContent };