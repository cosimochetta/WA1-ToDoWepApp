import React from 'react';
import { Navbar } from "./js/navbar.js"
import {MainContent} from "./js/mainContent.js"
import {Sidebar} from "./js/sidebar.js"
import moment from "moment"


const fakeTask = [
    { id: 1, description: "Complete Lab 7", important: true, privateTask: true, deadline: moment('2020-05-09'), project: "WebApp I", completed: false },
    { id: 2, description: "Complete Lab 4", important: false, privateTask: true, deadline: moment('2020-05-11'), project: "ProgSys", completed: false },
    { id: 3, description: "Third delivery: testing", important: true, privateTask: false, deadline: moment('2020-05-17'), project: "Softeng", completed: false },
    { id: 4, description: "I'll follow the sun", important: false, privateTask: false, deadline: moment('2020-05-15'), project: "Guitar", completed: false },
    { id: 5, description: "Vita spericolata", important: false, privateTask: false, deadline: moment('2020-05-15'), project: "Guitar", completed: false }
];

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            taskList: fakeTask,
            filter: "All"
        };
    }

    getProjects(){
        return [...new Set(this.state.taskList.map(t => t.project))];
    }

    setFilter = (filter) => {
		this.setState( {filter: filter});
	}

    render() {
        return <div className="App">
            <Navbar></Navbar>
            <div class="container-fluid">
                <div class="row vheight-100">
                    <Sidebar projects={this.getProjects()} setFilter={this.setFilter}></Sidebar>
                    <MainContent taskList={this.state.taskList} filter={this.state.filter}></MainContent>
                </div>
            </div>
        </div>
    }
}

export default App;