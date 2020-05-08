import React from 'react';
import {Sidebar} from "./sidebar.js"
import {MainContent} from "./mainContent.js" 

class PageContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {taskList: [...props.taskList],
		filter: "All"};
	}

	setFilter = (filter) => {
        this.setState( {filter: filter});
    }

	render() {
		return <div class="container-fluid">
			<div class="row vheight-100">
				<Sidebar taskList={this.state.taskList} setFilter={this.setFilter}></Sidebar>
				<MainContent taskList={this.state.taskList} filter={this.state.filter}></MainContent>
			</div>
		</div>
	}
}

export { PageContent }
