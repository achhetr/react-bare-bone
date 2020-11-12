import React from 'react';
import { Provider } from 'react-redux';

import store from '../ReduxStore/store';
import MainApp from '../MainApp/MainApp';

const AppRouter = () => (
	<Provider store={store}>
		<MainApp />
	</Provider>
);

export default AppRouter;
