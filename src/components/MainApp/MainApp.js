import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import HomePage from '../HomePage/Homepage';

const MainApp = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route to="/" component={HomePage} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default MainApp;
