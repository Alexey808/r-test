import React from 'react';

import connect from 'react-redux/es/connect/connect';
// import reducer from "./reducer";
import {ActionCreateItem} from "./actions";
import {GetItems} from "./selectors";
import Items from "./items-component";
import {Map} from "immutable";

export class ItemList extends React.Component {
	create() {
		console.log('ItemList -> onCreate');
		const newItem = Map({id: 1, prop: "testList1"});
		this.props.onCreate(newItem);
	}

	render() {
		const {collection} = this.props;
		console.log(this.props);

		return (
			<div className="app">
				{/*<Items collection={collection} onCreate={()=>this.create()}/>*/}
			</div>
		);
	}
}


//берём из store
const mapStateToProps = (state) => ({
	collection: GetItems(state)
});

// обновляем store
const mapDispatchToProps = (dispatch) => {


	return {
		// onCreate: (record) => new ActionCreateItem(record).send(dispatch)
		onCreate: (record) => dispatch(ActionCreateItem(record))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);