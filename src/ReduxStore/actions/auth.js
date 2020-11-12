import * as actionTypes from '../actionTypes';

const loginUser = ({ user }) => {
	return {
		type: actionTypes.LOGIN,
		payload: {
			user,
		},
	};
};
const registerUser = ({ user }) => ({
	type: actionTypes.REGISTER,
	payload: {
		user,
	},
});

export const logout = () => ({
	type: actionTypes.LOGOUT,
});
