import React from 'react';

export default class Items extends React.Component {
	render() {
		const {collection, onCreate} = this.props;
		const viewItems = collection.map((item) => {
			return (
				<div key={item.id}>
					id: {item.get("id")}
					prop: {item.get("prop")}
				</div>
			);
		});

		return (
			<div>
				{viewItems}
				<button onClick={onCreate}>create</button>
			</div>
		);
	}
}

