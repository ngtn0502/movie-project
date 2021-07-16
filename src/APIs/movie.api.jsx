import axios from 'axios';

export const axiosGetMovieList = () => {
  return axios({
    url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
    method: 'GET',
  });
};
