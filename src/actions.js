import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = (text) => {
	return{
	type: CHANGE_SEARCH_FIELD,
	payload: text
	}
}
export const runRequestRobots= () => (dispatch) => {
	dispatch({type: REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>response.json())
	.then( data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
	.then(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: 'wooooooooooooo eror'}))
}