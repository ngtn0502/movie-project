import axios from "axios";
import { baseUrl, METHOD__HTTP } from './../configs/api.configs';


export const loginAPI = (userLogin)=>{
    return axios({
        method: METHOD__HTTP.POST,
        url:`${baseUrl}QuanLyNguoiDung/DangNhap`,
        data: userLogin,
    })
}