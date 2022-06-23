import React from 'react'
import axios from 'axios';

const Signup = () => {


    let signupbtn = () =>{
        let tendangnhap = document.getElementById('tendangnhap').value;
        let tencuahang = document.getElementById('tencuahang').value;
        let mota = document.getElementById('mota').value;
        let matkhau = document.getElementById('matkhau').value;

        let rematkhau = document.getElementById('rematkhau').value;

		const formData = new FormData();
        formData.append("tendangnhap", tendangnhap);
        formData.append("tencuahang", tencuahang);
        formData.append("mota", mota);
        formData.append("matkhau", matkhau);

        // You should have a server side REST API 
        axios.post('http://localhost:4000/api/w1/insert/cuahang',
            formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then(function () {
            console.log('SUCCESS!!');
          })
          .catch(function () {
            console.log('FAILURE!!');
          });
    }


  return (
<div class="body-login-form">

    <div class="containe">
		<form  class="login-email">
            <p class="login-text">Tạo cửa hàng</p>
            <div class="input-group">
				<input id='tendangnhap' type="text" placeholder="Tên đăng nhập" defaultValue="" required />
			</div>
			<div class="input-group">
				<input id='tencuahang' type="text" placeholder="Tên cửa hàng" defaultValue="" required />
			</div>
			<div class="input-group">
				<input id='mota' type="text" placeholder="Mô tả" defaultValue="" required />
			</div>
			<div class="input-group">
				<input id='matkhau' type="password" placeholder="Mật khẩu" name="password" defaultValue="" required />
            </div>
            <div class="input-group">
				<input id='rematkhau' type="password" placeholder="Nhập lại mật khẩu" name="cpassword" defaultValue="" required />
			</div>
			<div class="input-group">
				<button name="submit" class="btn" onClick={signupbtn}>Đăng ký</button>
			</div>
			<p class="login-register-text">Bạn đã có tài khoản? <a href="/login">Đăng nhập</a>.</p>
		</form>
	</div>

</div>
  )
}

export default Signup
