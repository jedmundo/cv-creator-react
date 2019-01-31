import { Dispatch } from 'redux';
import { GET_LINKEDIN_DATA } from '../reducers/login.reducers';

export const GetLinkInDataAction = () => (dispatch: Dispatch) => {
	dispatch({
		payload: 'result_of_simple_action',
		type: GET_LINKEDIN_DATA
	})
}
