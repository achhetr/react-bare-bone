import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { APP_NAME } from '../personalise/config';

const MainApp = () => {
	const Header = () => <h1>{APP_NAME}</h1>;
	const HomePage = () => <h2>This is a React Bare Bone App</h2>;
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
