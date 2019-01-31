import { Action } from 'redux';

export const GET_LINKEDIN_DATA = 'GET_LINKEDIN_DATA';

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
