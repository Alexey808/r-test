export function BaseReducer(state, action) {
	switch (action.type) {
		case 'action/items/create':
			return state.set('collection', state.get('collection').push(action.subject.value));
		case 'action/items/delete':
			return state.set('collection', state.get('collection').filter((item) => item.get('id') !== action.subject.value));
		case 'action/items/save':
			return state;
		default:
			return state;
	}
}