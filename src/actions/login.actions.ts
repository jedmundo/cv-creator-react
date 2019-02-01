import { Dispatch } from 'redux';

import { GET_LINKEDIN_DATA, LOGIN } from '../constants/login.constants';

export const LoginAction = () => (dispatch: Dispatch) => {
	dispatch({
		payload: 'result_of_simple_action',
		type: LOGIN
	})
}

export const GetLinkInDataAction = () => (dispatch: Dispatch) => {
	dispatch({
		payload: 'result_of_simple_action',
		type: GET_LINKEDIN_DATA
	})
}
