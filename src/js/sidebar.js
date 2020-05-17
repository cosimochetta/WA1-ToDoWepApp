import React from 'react';


const filter_list = ["All", "Important", "Today", "Next 7 Days", "Private", "Shared With..."];
const filter_data_id = ["all", "important", "today", "week", "private", "shared"];

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active_type: "filter",
            active_id: 0
        }
    }

    setActiveId = (id) => {
        this.setState( {active_id: id});
    }

    setActiveType = (type) => {
        this.setState( {active_type: type});
    }
    render() {
        return <aside className="collapse d-sm-block col-sm-3 col-12 bg-light below-nav" id="left-sidebar">
            <div className="list-group list-group-flush">
                {filter_list.map((filter, index) => (<Filter key={index} index={index} filter={filter} data_id={filter_data_id[index]}
                    selected={this.state.active_type.localeCompare("filter") === 0 && this.state.active_id === index} 
                    setActiveId={this.setActiveId} setActiveType={this.setActiveType} setFilter={this.props.setFilter}/>))}
            </div>
            <div className="my-5">
                <h6 className="border-bottom border-gray p-3 mb-0">Projects</h6>
                <div className="list-group list-group-flush">
                    {this.props.projects && 
                    this.props.projects.map((project, index) => (<ProjectFilter key={index} index={index} projectFilter={project}
                        selected={this.state.active_type.localeCompare("project") === 0 && this.state.active_id === index} 
                        setActiveId={this.setActiveId} setActiveType={this.setActiveType} setFilter={this.props.setFilter}/>))}
                </div>
            </div>
        </aside>
    }
}

function Filter(props) {
    return <a href="#top" className={"list-group-item list-group-item-action " + (props.selected ? "active" : "")} data-id={props.filter}
    onClick={()=>{props.setActiveId(props.index); props.setActiveType("filter"); props.setFilter(props.filter, props.data_id)}}>{props.filter}</a>
}

function ProjectFilter(props) {
    return <a href="#top" className={"list-group-item list-group-item-action " + (props.selected ? "active" : "")} data-id={props.projectFilter}
    onClick={()=>{props.setActiveId(props.index); props.setActiveType("project"); props.setFilter(props.projectFilter, props.projectFilter)}}>{props.projectFilter}</a>
}


export { Sidebar }