export function ActionCreateItem(value) {
	console.log('action/items/create -> ', value);
	return {type: 'action/items/create', subject: {value}}
}

export function ActionDeleteItem(value) {
	// console.log('action/items/delete -> ', value);
	return {type: 'action/items/delete', subject: {value}}
}

export function ActionSaveItem(value) {
	// console.log('action/items/save -> ', value);
	return {type: 'action/items/save', subject: {value}}
}

