
import React from 'react';
import {TaskList} from "./taskList.js"



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
			<TaskList taskList={this.state.taskList}></TaskList>
			<button type="button" class="btn btn-lg btn-primary fixed-right-bottom">&#43;</button>
		</main>
	}
}


export { MainContent };