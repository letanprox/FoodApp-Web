import React from 'react'
import axios from 'axios';
import $ from "jquery";
import { useCookies } from 'react-cookie';

const Login = () => {

    const [cookies, setCookie] = useCookies(['user']);


    let loginbtn = () =>{
        let tendangnhap = document.getElementById('tendangnhap').value;
        let matkhau = document.getElementById('matkhau').value;
        axios.get('http://localhost:4000/api/checklogin/cuahang?tendangnhap='+tendangnhap+'&matkhau='+matkhau)
        .then(function (response) {
       
          // console.log(response.data);
          console.log(response);

          if(response.data.length > 0){
            setCookie('IDCUAHANG',response.data[0].ID  );
            window.location.replace("/store");
          }else{
            console.log('that bai');
            }

        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
        });


    }

    $(".login-email").submit(function(e) {
        e.preventDefault();
    });

  return (
    <div class="body-login-form">

    <div class="containe">
    <div class="login-email">
        <p class="login-text" >Đăng nhập</p>
        <div class="input-group">
            <input id='tendangnhap' type="text" placeholder="Tên đăng nhập" name="email" defaultValue="" required />
        </div>
        <div class="input-group">
            <input id='matkhau' type="password" placeholder="Mật khẩu" name="password" defaultValue="" required />
        </div>
        <div class="input-group">
            <button name="submit" onClick={loginbtn}  class="btn">Login</button>
        </div>
        <p class="login-register-text">Bạn không có tài khoản? <a href="/signup">Đăng ký</a>.</p>
    </div>
</div>
</div>
  )
}

export default Login
