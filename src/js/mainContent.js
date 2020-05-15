
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

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			taskList: [...nextProps.taskList],
			filter: nextProps.filter
		};
	}


	render() {
		return <main class="col-sm-9 col-12 below-nav" >
			<h1 class="bg-primary text-white d-inline-block p-2 rounded-top">{this.state.filter}</h1>
			<TaskList taskList={this.state.taskList}></TaskList>
			
		</main>
	}
}


export { MainContent };