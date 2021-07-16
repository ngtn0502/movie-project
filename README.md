# PROJECT MOVIE

## Bố cục, phân tích chia folder

1. Main
   -Giúp khách hàng thao tác trên trang web, xem danh sách phim, giỏ hàng,...

   1. Page: dùng để phân chia các trang
   2. Component: chứa các component có thể reuse trong page
      1. Header
   3. Redux: chua rootReducer and childReducer
   4. Store: chua action va store

2. Admin
   -Thêm xóa sửa phim, thao tác với user.

## yarn create react-app app-name

## cd app-name

## yarn Start

## Install Bootstrap

```
yarn add bootstrap@4.0.0
```

Down grade version of bootstrap

```
yarn add jquery bootstrap popper.js
```

## yarn add node-sass@4.14.1

Phien ban on dinh cua yarn

## Note

Cau truc thu muc
10h17

## Tại sao các website lớn như VNExpress có load trang

=> Những MPA website khi load phải tạo html từ sever-side-render thì phải load trang => Nhưng hỗ trợ về SEO tốt hơn

=> Những SPA website không load trang thì html được tạo từ client-side-render => nhưng hỗ trợ SEO không mạnh

=> Để giải quyết vấn đề này thì phải sử dụng FrameWork Next.JS

> Lý do bên trong là ta sử dụng thẻ meta để hỗ trợ SEo, nhưng vì SPA chỉ có một page HTML nên chỉ có một thẻ meta. Còn client-side-rendering thì mỗi lần load tạo ra một thẻ HTML nên SEO được nhiều thẻ meta

## Call APIs

tại component did mount do bất đồng bộ

https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01

## 14/7 - Buoi 1 - movie Project

1. Chia cau truc thu muc

2. React Router, React Router DOM

## 16/7 - Buoi 2 - movie Project

1. create store, reducer

2. create actions folder, constants type

3. In `home page` link component with store

4. dispatch action (contain data movie) to store by function `getMovieList` in `hone page`

tips: sau khi truyền mapStateToProps vào component của react dev tool kiểm tra đã có props chưa

tips2: để biết cần lấy state nào từ reducer -> ra phần `state` của redux dev tool coi
