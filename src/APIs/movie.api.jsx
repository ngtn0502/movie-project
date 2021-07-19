import axios from 'axios';
import { baseUrl, METHOD__HTTP } from './../configs/api.configs';

export const axiosGetMovieList = () => {
  return axios({
    url: `${baseUrl}QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
    method: METHOD__HTTP.GET,
  });
};

export const axiosGetMovieDetail = (id) => {
  return axios({
    url: `${baseUrl}QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: METHOD__HTTP.GET,
  });
};
