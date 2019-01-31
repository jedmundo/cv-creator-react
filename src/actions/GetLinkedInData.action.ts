import { Dispatch } from 'redux';
import { GET_LINKEDIN_DATA } from '../reducers/getLinkedInData.reducer';

export const GetLinkInDataAction = () => (dispatch: Dispatch) => {
	dispatch({
		payload: 'result_of_simple_action',
		type: GET_LINKEDIN_DATA
	})
}
