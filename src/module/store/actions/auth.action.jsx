import { loginAPI } from "../../../APIs/auth.api.jsx";
import { USER_LOGIN } from './../constants/auth.constant';



export const loginAction = (userLogin)=>{
    return async (dispatch)=>{
        try {
            const response = await loginAPI(userLogin);
            console.log(response);
            dispatch({
                type: USER_LOGIN,
            })
        } catch (error) {
            console.log(error);
        }
    }
}