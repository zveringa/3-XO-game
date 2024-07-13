import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Game } from './game';
import { ReduxRenderer } from './redux-manager';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<ReduxRenderer store={store}>
		<Game />
	</ReduxRenderer>,
);
