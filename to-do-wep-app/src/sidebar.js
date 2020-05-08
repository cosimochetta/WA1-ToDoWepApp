import React from 'react';


const filter_list = ["All", "Important", "Next 7 Days", "Private", "Shared With..."];
const filter_data_id = ["filter-all", "filter-important", "filter-today", "filter-week", "filter-private", "filter-shared"];

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [...new Set(props.taskList.map(task => task.project))],
            active_type: "filter",
            active_id: 0
        }
    }
    render() {
        return <aside class="collapse d-sm-block col-sm-3 col-12 bg-light below-nav" id="left-sidebar">
            <div class="list-group list-group-flush">
                {filter_list.map((filter, index) => (<Filter key={index} filter={filter} data_id={filter_data_id[index]}
                    selected={this.state.active_type.localeCompare("filter") === 0 && this.state.active_id === index} />))}
            </div>
            <div class="my-5">
                <h6 class="border-bottom border-gray p-3 mb-0">Projects</h6>
                <div class="list-group list-group-flush">
                    {this.state.projects.map((project, index) => (<Project key={index} project={project}
                        selected={this.state.active_type.localeCompare("project") === 0 && this.state.active_id === index} />))}
                </div>
            </div>
        </aside>
    }
}

function Filter(props) {
    if (props.selected) {
        return <a href="#top" class="list-group-item list-group-item-action active" data-id={props.data_id}>{props.filter}</a>
    }
    else {
        return <a href="#top" class="list-group-item list-group-item-action" data-id={props.data_id}>{props.filter}</a>
    }

}

function Project(props) {
    if (props.selected) {
        return <a href="#top" class="list-group-item list-group-item-action active" data-id={props.project}>{props.project}</a>
    }
    else {
        return <a href="#top" class="list-group-item list-group-item-action" data-id={props.project}>{props.project}</a>
    }
}


export { Sidebar }