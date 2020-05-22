import React from 'react';
import moment from "moment"
import Form from "react-bootstrap/Form"

const update_icon = <svg class="bi bi-pencil-square m-1 " width="1.2em" height="1.2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
	<path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z" />
	<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd" />
</svg>

const delete_icon = <svg class="bi bi-trash m-1" width="1.2em" height="1.2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
	<path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
	<path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd" />
</svg>

const shared_icon = <svg class="bi bi-person-square" width="1.2em" height="1.2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
	<path fill-rule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clip-rule="evenodd"></path>
	<path fill-rule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
</svg>;

const TaskItem = (props) => {
	let task = props.task;

	return <tr id={"task" + task.id} class="w-100">
		<th scope="row">
			<div class="custom-control custom-checkbox">
				<input type="checkbox" id={"check-t" + task.id} class={"custom-control-input " + (task.important ? "important" : "")} htmlFor={"check-t" + props.id} defaultChecked = {task.completed}></input>
				<label class="description custom-control-label" htmlFor={"check-t" + task.id}>{task.description}</label>
			</div>
		</th>
		<td><div class="badge badge-pill badge-primary align-middle">{task.project || null}</div></td>
		<td>{task.privateTask ? null : shared_icon}</td>
		<td>{task.deadline && (
			<small class={"mx-auto date " + (task.deadline.isBefore(moment(), "day") ? "bg-danger text-white" : "")}>{task.deadline.format("YYYY/MM/DD")}</small>
		)}
		</td>
		<td>
			<UpdateButton addOrEditTask={props.addOrEditTask} task={task} setTaskFormMode={props.setTaskFormMode}></UpdateButton>
			<DeleteButton deleteTask={props.deleteTask} id={task.id}></DeleteButton>
		</td>
	</tr>
}


function UpdateButton(props) {
	return <span onClick={() => { props.setTaskFormMode("Update", props.task) }}>{update_icon}</span>
}

function DeleteButton(props) {
	return <span onClick={() => { props.deleteTask(props.id) }}>{delete_icon}</span>
}

export { TaskItem };