
//
//
// export class ActionCreateItems  {
//     static type = 'action/items/create';
//
//     constructor(record) {
//         super(ActionCreateItems.type);
//         this.entityRecord = record;
//     }
// }

export function ActionCreateItem(value) {
	console.log('action/items/create', value);
	return {type: 'action/items/create', added: value}
}


// export class ActionCreateItem {
// 	static type = 'ADD';
//
// 	toAction() {
// 		const action = {};
// 		for (let key in this) {
// 			if (key === 'toAction' || key === 'send') {
// 				continue;
// 			}
// 			action[key] = this[key];
// 		}
// 		return action;
// 	}
//
//
//
// 	send = (dispatch) => dispatch(this.toAction())
// }

