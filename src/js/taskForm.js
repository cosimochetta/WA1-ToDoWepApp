import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap'

class TaskForm extends React.Component {
	constructor(props) {
		super(props);
		let task = props.task;
		if (props.task != null) {
			this.state = { 
				id: task.id, 
				description: task.description, 
				project: task.project, 
				important: task.important, 
				privateTask: task.privateTask, 
				deadline: task.deadline.format("YYYY/MM/DD") 
			};
		}
		else {
			this.state = { id: null, description: "", project: "", important: false, privateTask: false, deadline: null };
		}

	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.setTaskFormMode("hidden");
		this.props.addOrEditTask(this.state);
	}

	updateField = (name, value) => {
		this.setState({ [name]: value });
	}


	render() {
		let task = this.props.task;
		return (
			<Modal show={this.props.taskFormMode !== "hidden"} onHide={() => this.props.setTaskFormMode("hidden")}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.taskFormMode} Task</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group controlId="form_description">
							<Form.Label>Description</Form.Label>
							<Form.Control placeholder={task == null ? "Enter description" : task.description} 
							required onChange={(ev) => this.updateField("description", ev.target.value)} />
						</Form.Group>
						<Form.Group controlId="form_project">
							<Form.Label>Project</Form.Label>
							<Form.Control placeholder="Enter project" onChange={(ev) => this.updateField("project", ev.target.value)} />
						</Form.Group>

						<Form.Group>
							<Form.Check custom label="important" type="checkbox" id={"form_important"} onChange={(ev) => this.updateField("important", ev.target.checked)} />
							<Form.Check custom label="private" type="checkbox" id={'form_private'} onChange={(ev) => this.updateField("privateTask", ev.target.checked)} />
						</Form.Group>

						<Form.Label>Deadline</Form.Label>
						<Form.Group controlId="form_deadline">
							<Form.Control type="date" onChange={(ev) => this.updateField("deadline", ev.target.value)} />
						</Form.Group>
						<Button variant="primary" type="submit" className="float-right" onSubmit>
							Add
  						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		)
	}
}

export { TaskForm };