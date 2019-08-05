import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './app';

import {Provider} from 'react-redux';
import {store} from './store';
import ItemList from "./test/items-container";

ReactDOM.render(
	<Provider store={store}>
		<ItemList/>
	</Provider>,
	document.getElementById('root')
);
