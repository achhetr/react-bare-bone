import React from 'react';
import { BrowserRouter, Switch, Route as PublicRoute } from 'react-router-dom';

import PrivateRoute from '../AppRouter/PrivateRoute';
import Layout from '../components/Layout/Layout';
import HomePage from '../components/HomePage/HomePage';

const MainApp = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<PrivateRoute path="/" component={HomePage} />
				<PublicRoute path="/login" component={() => {}} />
			</Switch>
		</Layout>
	</BrowserRouter>
);

export default MainApp;
