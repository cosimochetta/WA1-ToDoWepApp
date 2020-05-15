import React from 'react';
import { Navbar } from "./js/navbar.js"
import { MainContent } from "./js/mainContent.js"
import { Sidebar } from "./js/sidebar.js"
import * as API from "./js/API.js"
import { TaskForm } from './js/taskForm.js';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			taskList: [],
			project: [],
			filter: "All",
			showTaskForm: false
		};
	}

	componentDidMount() {
		API.getTasks().then((taskList) => this.setState({ taskList: [...taskList], 
			projects: [...new Set(taskList.map(task => task.project))]}));
	}

	setFilter = (filterName, filterId) => {
		API.getTasks(filterId).then((taskList) => this.setState({ taskList: [...taskList], filter: filterName }));
	}

	setShowTaskForm = (show) => {
		this.setState({showTaskForm: show});
	}

	render() {
		return <div className="App">
			<Navbar></Navbar>
			<div class="container-fluid">
				<div class="row vheight-100">
					<Sidebar projects={this.state.projects} setFilter={this.setFilter}></Sidebar>
					<MainContent taskList={this.state.taskList} filter={this.state.filter}></MainContent>
					<button type="button" id="addButton" class="btn btn-lg btn-primary fixed-right-bottom" onClick={() => this.setShowTaskForm(true)}>&#43;</button>
					<TaskForm showTaskForm={this.state.showTaskForm} setShowTaskForm={this.setShowTaskForm} ></TaskForm>
				</div>
			</div>
		</div>
	}
}

export default App;