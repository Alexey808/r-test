import React from 'react';
import './item-component.css';

export default class Items extends React.Component {
	delete(id) {
		this.props.onDelete(id);
	}
	render() {
		const {collection, onCreate, onSave} = this.props;
		const viewItems = collection.map((item) => {
			return (
				<div key={item.get('id')} className="item-container">
					<div>
						id: {item.get("id")}
						prop: {item.get("prop")}
						{item.get('test')}
					</div>
					<button onClick={()=>this.delete(item.get("id"))}>delete</button>
				</div>

			);
		});

		return (
			<div>
				{viewItems}
				<button onClick={onCreate}>create</button>
				<button onClick={onSave}>save</button>
			</div>
		);
	}
}

