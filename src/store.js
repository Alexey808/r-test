import { createStore } from 'redux'
import { Map, List } from 'immutable';

// import { createSelector } from 'reselect';

function todosReduce(state, action) {
	debugger;

	switch (action.type) {
		// case 'ADD':
		// 	return state.concat([action.text]);

		case 'ADD':
			return Object.assign(state, state.collection.push(action.added));

		case 'DELETE': return {};

		case 'action/items/create':
			return state.collection.concat([action.added]);

		default:
			return state;
	}
}
const initialStore = {
	collection: new List([
		Map({id: 1, prop: "testList1"}),
		Map({id: 2, prop: "testList2"}),
		Map({id: 3, prop: "testList3"}),
	])
};

export const store = createStore(todosReduce, initialStore);

// console.log(store.getState(), initialStore);
store.dispatch({
	type: 'ADD',
	added: Map({id: 0, prop: "testAddItem1"}),
});
// console.log(store.getState(), initialStore);
store.dispatch({
	type: 'ADD',
	added: Map({id: 10, prop: "testAddItem2"}),
});
// console.log(store.getState(), initialStore);
//
const st = store.getState();
console.log(st);
console.log(
	st.collection.map((item) => console.log(item.get("id"), item.get("prop")))
);

// store.dispatch({
// 	type: 'DELETE',
// });
// console.log(store.getState());

// store.dispatch({
// 	type: null,
// });
// const st = store.getState();
// console.log(
// 	st.collection.map((item) => console.log(item.get("id"), item.get("prop")))
// );


// /**
//  * селекторы
//  */
// const collection = state => state.collection;
//
// const getEntities = createSelector(
// 	collection,
// 	entity => entity // выбираем/фильтруем
// );



