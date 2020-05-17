import React from 'react';
import { Navbar } from "./js/navbar.js"
import { MainContent } from "./js/mainContent.js"
import { Sidebar } from "./js/sidebar.js"
import * as API from "./js/API.js"
import { TaskForm } from './js/taskForm.js';
import Task from './js/task.js';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			taskList: [],
			project: [],
			filter: "All",
			taskFormMode: "hidden",
			currentTask: null
		};
	}

	componentDidMount() {
		API.getTasks().then((taskList) => this.setState({
			taskList: [...taskList],
			projects: [...new Set(taskList.map(task => task.project))]
		}));
	}

	setFilter = (filterName, filterId) => {
		API.getTasks(filterId).then((taskList) => this.setState({ taskList: [...taskList], filter: filterName }));
	}

	setTaskFormMode = (mode, task) => {
		this.setState({ taskFormMode: mode });
		this.setState({currentTask: task});
	}

	addOrEditTask = (task) => {
		if (task.coursecode == null) {
			task.id = Math.max(...this.state.taskList.map((t) => t.id)) + 1;
		}
		API.insertTask(Task.from(task)).then((newTask) => {
			this.setState((state) => {
				let newTaskList = this.state.taskList.filter((t) => t.id !== task.id);
				newTaskList.push(task);
				return { taskList: [...newTaskList] };
			})
		});
	};

	deleteTask = (id) => {
		API.deleteTask(id).then(async (result) => {
			console.log("deleting....");
			if (result) {
				this.setState((state) => {
					let newTaskList = this.state.taskList.filter((t) => t.id !== id);
					return { taskList: [...newTaskList] }
				})
			}
		})
	}

	render() {
		return <div className="App">
			<Navbar></Navbar>
			<div class="container-fluid">
				<div class="row vheight-100">
					<Sidebar projects={this.state.projects} setFilter={this.setFilter}></Sidebar>
					<MainContent taskList={this.state.taskList} filter={this.state.filter} deleteTask={this.deleteTask} addOrEditTask={this.addOrEditTask} setTaskFormMode={this.setTaskFormMode}></MainContent>
					<button type="button" id="addButton" class="btn btn-lg btn-primary fixed-right-bottom" onClick={() => this.setTaskFormMode("Add", null)}>&#43;</button>
					<TaskForm taskFormMode={this.state.taskFormMode} setTaskFormMode={this.setTaskFormMode} addOrEditTask={this.addOrEditTask} task={this.state.currentTask}></TaskForm>
				</div>
			</div>
		</div>
	}
}

export default App;