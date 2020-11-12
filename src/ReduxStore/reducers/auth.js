import * as actionTypes from '../actionTypes';

const defaultUser = {
	authToken: true,
	user: null,
};

const authReducers = (state = { ...defaultUser }, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			return {
				user: action.payload.user,
				authToken: true,
			};

		case actionTypes.REGISTER:
			return {
				user: action.payload.user,
				authToken: true,
			};

		case actionTypes.LOGOUT:
			return {
				...defaultUser,
			};

		default:
			return state;
	}
};

export default authReducers;
