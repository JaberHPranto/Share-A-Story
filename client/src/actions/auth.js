import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const signup = (formData,history) => async (dispatch) => {
    try {
        // signup the use
        const { data } = await api.signUp(formData)
        dispatch({ type: AUTH, data })
        
        history.push("/")
    } catch (error) {
        console.log(error);
    }
}

export const signin = (formData,history) => async (dispatch) => {
    try {
        // signin the use
        const { data } = await api.signIn(formData)
        dispatch({ type: AUTH, data })

        history.push("/")
    } catch (error) {
        console.log(error);
    }
}