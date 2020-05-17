import moment from "moment"

let fakeTask = [
	{ id: 1, description: "Complete Lab 8", important: true, privateTask: true, deadline: moment('2020-05-17'), project: "WebApp I", completed: false },
	{ id: 2, description: "Complete Lab 5", important: false, privateTask: true, deadline: moment('2020-05-19'), project: "FLC", completed: false },
	{ id: 3, description: "Third delivery: testing", important: true, privateTask: false, deadline: moment('2020-05-18'), project: "Softeng", completed: false },
	{ id: 4, description: "I'll follow the sun", important: false, privateTask: false, deadline: moment('2020-05-15'), project: "Guitar", completed: false },
	{ id: 5, description: "Vita spericolata", important: false, privateTask: false, deadline: moment('2020-05-15'), project: "Guitar", completed: false }
];


/**
* Function to check if a date is today. Returns true if the date is today, false otherwise.
* @param {*} date a Moment js date to be checked
*/
const isToday = function(date) {
	return date.isSame(moment(), 'day');
}

/**
* Function to check if a date is in the next week. Returns true if the date is in the next week, false otherwise.
* @param {*} date a Moment js Date to be checked
*/
const isNextWeek = function(date) {
	const nextWeek = moment().add(1, 'weeks').endOf("day");
	const tomorrow = moment().add(1, 'days').startOf("day");
	return date.isSameOrAfter(tomorrow) && date.isBefore(nextWeek);
}

async function getTasks(filter) {
	return new Promise((resolve, reject) => {
		let tasks = [...fakeTask];
		
		if (filter) {
			switch (filter) {
				case "all":
					break;
				case "important":
					tasks = tasks.filter((el) => {
						return el.important;
					});
					break;
				case "private":
					tasks = tasks.filter((el) => {
						return el.privateTask;
					});
					break;
				case "shared":
					tasks = tasks.filter((el) => {
						return !el.privateTask;
					});
					break;
				case "today":
					tasks = tasks.filter((el) => {
						if (el.deadline)
							return isToday(el.deadline);
						else
							return false;
					});
					break;
				case "week":
					tasks = tasks.filter((el) => {
						if (el.deadline)
							return isNextWeek(el.deadline);
						else
							return false;
					});
					break;
				default:
					//try to filter by project
					tasks = tasks.filter((el) => {
						return el.project === filter;
					});
			}
		}
		resolve(tasks);
	});
}

async function insertTask(task){
	fakeTask = fakeTask.filter((el) => el.id !== task.id);
	fakeTask.push(task);
	return task;
}

async function deleteTask(id){
	fakeTask = fakeTask.filter((el) => el.id !== id);
	return true;
}

export { getTasks, insertTask, deleteTask };