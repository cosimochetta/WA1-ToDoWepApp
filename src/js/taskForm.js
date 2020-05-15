import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap'


class TaskForm extends React.Component {
	render() {
		return (
			<Modal show={this.props.showTaskForm} onHide={() => this.props.setShowTaskForm(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Add a Task</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="form_description">
							<Form.Label>Description</Form.Label>
							<Form.Control placeholder="Enter description" required />
						</Form.Group>
						<Form.Group controlId="form_project">
							<Form.Label>Project</Form.Label>
						</Form.Group>
						<Form.Group>
							<Form.Check
								custom
								label="important"
								type="checkbox"
								id={"form_important"}
							/>
							<Form.Check
								custom
								label="private"
								type="checkbox"
								id={'form_private'}
							/>
						</Form.Group>

						<Form.Label>Deadline</Form.Label>
						<Form.Group controlId="form_deadline_date">

							<Form.Control type="date" />
						</Form.Group>
						<Form.Group controlId="form_deadline_time">
							<Form.Control type="time" />
						</Form.Group>
						<Button variant="primary" type="submit" className="float-right">
							Add
  					</Button>
					</Form>
				</Modal.Body>
			</Modal>
		)
	}
}

export { TaskForm };