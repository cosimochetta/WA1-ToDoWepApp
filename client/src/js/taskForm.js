import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap'


function ModalTaskForm(props) {
	return <Modal show={props.taskFormMode !== "hidden"} onHide={() => props.setTaskFormMode("hidden")}>
		<Modal.Header closeButton>
			<Modal.Title>{props.taskFormMode} Task</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			{props.taskFormMode !== "hidden" &&
				<TaskForm taskFormMode={props.taskFormMode} setTaskFormMode={props.setTaskFormMode} addOrEditTask={props.addOrEditTask} task={props.task}></TaskForm>}
		</Modal.Body>
	</Modal>
}

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
		const form = event.currentTarget;
		if (!form.checkValidity()) {
			form.reportValidity();
		} else {
			let task = Object.assign({}, this.state);
			this.props.addOrEditTask(task);
			this.props.setTaskFormMode("hidden");
		}
	}

	updateField = (name, value) => {
		this.setState({ [name]: value });
	}


	render() {
		let task = this.props.task;
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
				<Button variant="primary" type="submit" className="float-right" onSubmit>
					{this.props.taskFormMode}
				</Button>
			</Form>
		)
	}
}

export { ModalTaskForm };