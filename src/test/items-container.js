import React from 'react';

import connect from 'react-redux/es/connect/connect';
// import reducer from "./reducer";
import {ActionCreateItem, ActionDeleteItem, ActionSaveItem} from "./actions";
import {GetItems} from "./selectors";
import Items from "./items-component";
import {Map} from "immutable";

export class ItemList extends React.Component {
	create() {
		// console.log('ItemList -> onCreate');
		const newItem = Map({id: 10, prop: "testList1"});
		this.props.onCreate(newItem);
	}

	delete(id) {
		// console.log('ItemList -> onDelete', id);
		this.props.onDelete(id);
	}

	save() {
		// console.log('ItemList -> onSave');
		this.props.onSave();
	}

	render() {
		const {collection} = this.props;
		// console.log(this.props);

		return (
			<div className="app">
				<Items collection={collection}
				       onCreate={()=>this.create()}
				       onDelete={(id)=>this.delete(id)}
				       onSave={()=>this.save()}
				/>
			</div>
		);
	}
}


//берём из store
const mapStateToProps = (state) => ({
	collection: GetItems(state)
});

// обновляем store
const mapDispatchToProps = (dispatch) => ({
	onCreate: (record) => dispatch(ActionCreateItem(record)),
	onDelete: (record) => dispatch(ActionDeleteItem(record)),
	onSave: (record) => dispatch(ActionSaveItem(record)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);