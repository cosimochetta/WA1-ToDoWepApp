
import React from 'react';
import { TaskList } from "./taskList.js"



class MainContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			taskList: [...props.taskList],
			filter: props.filter
		};
	}

	render() {
		return <main class="col-sm-9 col-12 below-nav" >
			<h1 class="bg-primary text-white d-inline-block p-2 rounded-top">{this.props.filter}</h1>
			<TaskList taskList={this.props.taskList} addTask={this.props.addTask} deleteTask={this.props.deleteTask} 
			addOrEditTask={this.props.addOrEditTask} setTaskFormMode={this.props.setTaskFormMode}></TaskList>
		</main>
	}
}


export { MainContent };