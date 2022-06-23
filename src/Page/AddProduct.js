import React from 'react'
import { useState } from "react";
import axios from 'axios';
import $, { data } from "jquery";
import '../CustomPage/AddProduct.css'



const AddProduct = ({loadsanpham,  datax, status}) => {

  let ID_CUAHANG = 1;
  
  const [imagestate, setimagestate]  = useState("https://cdn.tgdd.vn/2021/04/CookProduct/1-1200x676-21.jpg");
  let checkshow = false;
  const [selectedFile, setSelectedFile] = React.useState(null);




  const [filechange, setfilechange] = useState(false);


  


  let onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setimagestate(URL.createObjectURL(img));

      setfilechange(true);
      document.getElementById("anh-xx").src = URL.createObjectURL(img);
      setSelectedFile(event.target.files[0])
   
    }
  };


  let themsanpham = (event) => {
      event.preventDefault();

      let ten = document.getElementById('tensanpham').value;
      let soluong = document.getElementById('soluongsanpham').value;
      let gia = document.getElementById('giasanpham').value;

      console.log(ten, soluong);

        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("tensanpham", ten);
        formData.append("soluong", soluong);
        formData.append("gia", gia);
        formData.append("idcuahang", ID_CUAHANG);

        // You should have a server side REST API 
        axios.post('http://localhost:4000/api/w1/insert/sanpham',
            formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then(function () {
            console.log('SUCCESS!!');
            loadsanpham();
            $(".close-btn").click();
          })
          .catch(function () {
            console.log('FAILURE!!');
          });
  }


  let capnhatsanpham = (event) =>{
    event.preventDefault();


    let idsanpham = datax.ID;
    let ten = document.getElementById('tensanpham').value;
    let soluong = document.getElementById('soluongsanpham').value;
    let gia = document.getElementById('giasanpham').value;

    const formData = new FormData();
    formData.append("tensanpham", ten);
    formData.append("soluong", soluong);
    formData.append("gia", gia);
    formData.append("idsanpham", idsanpham);
    formData.append("idcuahang", ID_CUAHANG);

    if(filechange == false){

      console.log(filechange)
      
      axios.post('http://localhost:4000/api/w1/update/1/sanpham',
      formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function () {
        console.log('SUCCESS!!');
        // loadsanpham();
        loadsanpham();
        $(".close-btn").click();
      })
      .catch(function (error) {
        console.log(error)
        console.log('FAILURE!!');
      });

    }else{
    
      formData.append("file", selectedFile);
      axios.post('http://localhost:4000/api/w1/update/0/sanpham',
      formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(function () {
      console.log('SUCCESS!!');
      console.log("uploadimage");
      setfilechange(false);
      loadsanpham();
      $(".close-btn").click();
    })
    .catch(function () {
      console.log('FAILURE!!');
    });
    
    }

  }




  



  return (
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">{status == 0 ? 'Thêm sản phẩm' : 'Cập nhật sản phẩm'}</h4>
      </div>
      <div class="modal-body">
        <div class="login-container animated fadeInDown bootstrap snippets bootdeys">
            <div class="card-body media align-items-center">

            {/* status == 0 ? 'https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png' :  */}
                <img src={datax.ANH} id="anh-xx" alt="" class="d-block ui-w-80"/>
                <div class="media-body ml-4">
                  <label class="btn btn-outline-primary">
                    Tải ảnh lên
                    <input type="file" onChange={onImageChange} class="account-settings-fileinput"/>
                  </label> &nbsp;
                  {/* <button type="button" class="btn btn-default md-btn-flat">Reset</button> */}

                  <div class="text-light small mt-1">Cho phép JPG, GIF or PNG. Max size là 800K</div>
                </div>
              </div>

              <div class="card-body">
                <div class="form-group">
                  <label class="form-label">Tên sản phẩm</label>
                  <input id='tensanpham' type="text" key={status == 0 ? '' : datax.TEN}  defaultValue={status == 0 ? '' : datax.TEN} class="form-control mb-1" />
                </div>
                <div class="form-group">
                  <label class="form-label">Số lượng</label>
                  <input id='soluongsanpham' key={status == 0 ? '' :datax.SOLUONGBAN} defaultValue={status == 0 ? '' :datax.SOLUONGBAN} type="number" class="form-control" />
                </div>
                <div class="form-group">
                  <label class="form-label">Giá</label>
                  <input id='giasanpham' key={status == 0 ? '' : datax.GIA} defaultValue={status == 0 ? '' : datax.GIA} type="number" class="form-control" />
                </div>
                <label class="form-label">Đăng bán</label> <br/>
                <div class="btn-group btn-toggle"> <button class="btn btn-sm active btn-primary">ON</button> <button class="btn btn-sm btn-default">OFF</button></div>
                <br/>
                <br/>

              </div>
        </div>

      </div>
      <div class="modal-footer">
      <button type="button"  onClick={status == 0 ? themsanpham : capnhatsanpham} class="btn btn-primary">{status == 0 ? 'Thêm sản phẩm' : 'Cập nhật'}</button>
        <button type="button" class="btn btn-default close-btn" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddProduct
