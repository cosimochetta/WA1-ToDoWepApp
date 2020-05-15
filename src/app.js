import React from 'react';
import { Navbar } from "./js/navbar.js"
import { MainContent } from "./js/mainContent.js"
import { Sidebar } from "./js/sidebar.js"
import * as API from "./js/API.js"

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			taskList: [],
			project: [],
			filter: "All"
		};
	}

	componentDidMount() {
		API.getTasks().then((taskList) => this.setState({ taskList: [...taskList], 
			projects: [...new Set(taskList.map(task => task.project))]}));
	}

	getProjects() {
		return ;
	}

	setFilter = (filterName, filterId) => {
		API.getTasks(filterId).then((taskList) => this.setState({ taskList: [...taskList], filter: filterName }));
	}



	render() {
		return <div className="App">
			<Navbar></Navbar>
			<div class="container-fluid">
				<div class="row vheight-100">
					<Sidebar projects={this.state.projects} setFilter={this.setFilter}></Sidebar>
					<MainContent taskList={this.state.taskList} filter={this.state.filter}></MainContent>
				</div>
			</div>
		</div>
	}
}

export default App;