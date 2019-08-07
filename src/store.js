import { createStore } from 'redux'
import { Map, List } from 'immutable';

function reduce(state, action) {
	switch (action.type) {
		case 'action/items/create':
			// return state.get("collection").push(action.added);
			return state.set('collection', state.get('collection').push(action.added));
		default:
			return state;
	}
}
const initialStore = Map({
	collection: new List([
		Map({id: 1, prop: "prop1"}),
		Map({id: 2, prop: "prop2"}),
		Map({id: 3, prop: "prop3"}),
	])
});

export const store = createStore(reduce, initialStore);

// // 1 dispatch
// store.dispatch({
// 	type: 'ADD',
// 	added: Map({id: 4, prop: "prop5"}),
// });
// // 2 dispatch
// store.dispatch({
// 	type: 'ADD',
// 	added: Map({id: 5, prop: "prop5"}),
// });




// console.log(store.getState(), initialStore);






// const st = store.getState();
// console.log(st);
// console.log(
// 	st.collection.map((item) => console.log(item.get("id"), item.get("prop")))
// );

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



