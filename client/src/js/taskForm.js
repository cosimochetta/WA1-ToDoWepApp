import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap'
import {Redirect, Link} from "react-router-dom"

function ModalTaskForm(props) {
	return <Modal show={props.show}>
		<Modal.Header>
			<Modal.Title>{props.taskFormMode} Task</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			{props.show &&
				<TaskForm taskFormMode={props.taskFormMode} addOrEditTask={props.addOrEditTask} task={props.task}></TaskForm>}
		</Modal.Body>
	</Modal>
}

class TaskForm extends React.Component {	
	constructor(props) {
		super(props);
		let task = props.task;
		if (task != null) {
			this.state = {...task};
			this.state.deadline = (task.deadline != null) ? task.deadline.format("YYYY/MM/DD") : "";
		}
		else {
			this.state = { id: null, description: "", project: "", important: false, privateTask: false, deadline: null };
		}
		this.state.submitted = false;
		console.log(this.state)
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		if (!form.checkValidity()) {
			form.reportValidity();
		} else {
			let task = Object.assign({}, this.state);
			this.props.addOrEditTask(task);
		}
		this.setState((state) => ({submitted: true}));
	}

	updateField = (name, value) => {
		this.setState({ [name]: value });
	}


	render() {
		let task = this.props.task;
		if(this.state.submitted)
			return <Redirect to="/"/>
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId="form_description">
					<Form.Label>Description</Form.Label>
					<Form.Control placeholder="Enter description"
						defaultValue={task != null ? task.description : ""}
						required onChange={(ev) => this.updateField("description", ev.target.value)} />
				</Form.Group>
				<Form.Group controlId="form_project">
					<Form.Label>Project</Form.Label>
					<Form.Control placeholder="Enter project"
						defaultValue={task != null ? task.project : ""}
						onChange={(ev) => this.updateField("project", ev.target.value)} />
				</Form.Group>

				<Form.Group>
					<Form.Check custom label="important" type="checkbox" id={"form_important"} defaultChecked={task != null && task.important}
						onChange={(ev) => this.updateField("important", ev.target.checked)} />
					<Form.Check custom label="private" type="checkbox" id={'form_private'} defaultChecked={task != null && task.privateTask}
						onChange={(ev) => this.updateField("privateTask", ev.target.checked)} />
				</Form.Group>

				<Form.Label>Deadline</Form.Label>
				<Form.Group controlId="form_deadline">
					<Form.Control type="date" defaultValue={(task != null && task.deadline != null) ? task.deadline.format("YYYY-MM-DD") : ""}
						onChange={(ev) => this.updateField("deadline", ev.target.value)} />
				</Form.Group>
				<div className="float-right">
				<Link to="/"><Button variant="secondary" >Cancel</Button></Link>
				<Button variant="primary" type="submit" className="mx-2" onSubmit>
					{this.props.taskFormMode}
				</Button>
				</div>
			</Form>
		)
	}
}

export { ModalTaskForm };