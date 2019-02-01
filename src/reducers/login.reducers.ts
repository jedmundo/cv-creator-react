import { Action } from 'redux';
import { GET_LINKEDIN_DATA } from '../constants/login.constants';

export interface GetLinkedInData extends Action {
  payload: string;
}

export default (state = {}, action: GetLinkedInData) => {
	switch (action.type) {
		case GET_LINKEDIN_DATA:
			return {
				result: action.payload
			}
		default:
			return state
	}
}
