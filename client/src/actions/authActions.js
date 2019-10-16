import {SET_CURRENT_USER,GET_ERRORS} from './types';
import axios from 'axios';

//Register user
export const registerUser = (userData,hisatory) => dispatch => {
       axios
     .post('/api/users/register' , userData)
     .then(res => history.push('/login'))
     .catch(err => dispatch ({
       type: GET_ERRORS,
       payload: err.response.data
     }));

}