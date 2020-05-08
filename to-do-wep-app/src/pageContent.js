import React from 'react';
import {Sidebar} from "./sidebar.js"
import {MainContent} from "./mainContent.js" 

class PageContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {taskList: [...props.taskList]};
	}

	render() {
		return <div class="container-fluid">
			<div class="row vheight-100">
				<Sidebar></Sidebar>
				<MainContent taskList={this.state.taskList}></MainContent>
			</div>
		</div>
	}
}

export { PageContent }
