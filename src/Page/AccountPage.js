import React from 'react'
import  { useState, useEffect } from 'react'
import axios from 'axios';
import $ from "jquery";
import { useCookies } from 'react-cookie';
import DroTypeProduct from './DroTypeProduct';

const AccountPage = () => {


  const [imagestate, setimagestate]  = useState("https://bootdey.com/img/Content/avatar/avatar1.png");

  const [data, setdata]  = useState(
    {
      "ID": 0,
      "TEN": "",
      "MOTA": "",
      "ANH": "",
      "DANHGIA": 0,
      "GIATB": 0,
      "THOIGIANMO": "",
      "VITRI": "",
      "ID_LOAISANPHAM": 0,
      "TENDANGNHAP": "",
      "MATKHAU": ""
  }
  );

  const [choselsp, setchoselsp] = useState({});

  const [datas, setdatas]  = useState([]);

  const [cookies, setCookie] = useCookies(['user']);


  const [selectedFile, setSelectedFile] = React.useState(null);
  const [filechange, setfilechange] = useState(false);



  let choselspfu = (jdata) =>{
      console.log(jdata);
      setchoselsp(jdata)

  }

  let onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setimagestate(URL.createObjectURL(img))

      setfilechange(true);
      document.getElementById("anh-xx").src = URL.createObjectURL(img);
      setSelectedFile(event.target.files[0])
    }
  };







  useEffect(() => {

    axios.get('http://localhost:4000/api/w1/detail/cuahang?idch='+cookies.IDCUAHANG)
    .then(function (response) {
      console.log(response.data['recordset'][0]);
      setdata(response.data['recordset'][0]);
      setchoselsp({TEN: response.data['recordset'][0].TEN_LOAISANPHAM, ID: response.data['recordset'][0].ID_LOAISANPHAM})

    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });



    axios.get('http://localhost:4000/api/loaicuahang/list')
    .then(function (response) {
   

      setdatas(response.data['recordset']);
      console.log(response.data['recordset'])

    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
  


}, []);



    let updateaccount = () =>{


      let idch = cookies.IDCUAHANG;
      let tendangnhap = document.getElementById('tendangnhap').value;
      let tencuahang = document.getElementById('tencuahang').value;
      let diachi = document.getElementById('diachi').value;
      let gioithieu = document.getElementById('gioithieu').value;
      let thoigianmo = document.getElementById('thoigianmo').value;
      let idloaisanpham = choselsp.ID;


      const formData = new FormData();
      formData.append("idch", idch);
      formData.append("tendangnhap", tendangnhap);
      formData.append("tencuahang", tencuahang);
      formData.append("gioithieu", gioithieu);
      formData.append("diachi", diachi);
      formData.append("thoigianmo", thoigianmo);
      formData.append("idloaisanpham", idloaisanpham);


      if(filechange == false){

        console.log(filechange)
        
        axios.post('http://localhost:4000/api/w1/update/0/account',
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function () {
          console.log('SUCCESS!!');
          alert("c???p nh???t th??nh c??ng!!")
          // loadsanpham();
        })
        .catch(function (error) {
          console.log(error)
          console.log('FAILURE!!');
          alert("c???p nh???t th???t b???i!!")
        });
  
      }else{
      
        formData.append("file", selectedFile);
        axios.post('http://localhost:4000/api/w1/update/1/account',
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function () {
        console.log('SUCCESS!!');
        console.log("uploadimage");
        alert("c???p nh???t th??nh c??ng!!")
        setfilechange(false);
      })
      .catch(function () {
        console.log('FAILURE!!');
        alert("c???p nh???t th???t b???i!!")
      });
      
      }



    }






  return (
    <div class="row">

   <div class="tab-content">

   <div class="card-body media align-items-center">
                <img src={data.ANH} id="anh-xx" alt="" class="d-block ui-w-80"/>
                <div class="media-body ml-4">
                  <label class="btn btn-outline-primary">
                    T???i ???nh l??n
                    <input type="file" name="myImage" onChange={onImageChange} class="account-settings-fileinput"/>
                  </label> &nbsp;
                  {/* <button type="button" class="btn btn-default md-btn-flat">X??a ???nh</button> */}

                  <div class="text-light small mt-1">Cho ph??p JPG, GIF or PNG. Max size l?? 800K</div>
                </div>
              </div>


              <div class="card-body">

              <div class="form-group">
                  <label  class="form-label">T??n ????ng nh???p</label>
                  <input id="tendangnhap" type="text" defaultValue={data.TENDANGNHAP} class="form-control" />
                </div>


                <div class="form-group">
                  <label class="form-label">T??n c???a h??ng</label>
                  <input id="tencuahang" type="text" defaultValue={data.TEN} class="form-control mb-1" />
                </div>
                <div class="form-group">
                  <label class="form-label">?????a ch???</label>
                  <input id="diachi" type="text" defaultValue={data.VITRI} class="form-control" />
                </div>
                {/* <div class="form-group">
                  <label class="form-label">E-mail</label>
                  <input type="text" class="form-control mb-1" value="nmaxwell@mail.com"/>
                  <div class="alert alert-warning mt-3">
                    Your email is not confirmed. Please check your inbox.<br/>
                    <a href="javascript:void(0)">Resend confirmation</a>
                  </div>
                </div> */}
                <div class="form-group">
                  <label  class="form-label">Gi???i thi???u</label>
                  <input id="gioithieu" type="text" defaultValue={data.MOTA} class="form-control" />
                </div>


                <div class="form-group">
                  <label  class="form-label">Th???i gian m???</label>
                  <input id="thoigianmo" type="text" defaultValue={data.THOIGIANMO} class="form-control" />
                </div>






                <label  class="form-label">Ch???n lo???i s???n ph???m</label>

                <div class="dropdown">


                    <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">{choselsp.TEN}


                    <span class="caret"></span></button>
                      <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                      {
                        <DroTypeProduct datas={datas} choselspfu={choselspfu}/>
                      }

{/* 
<li role="presentation"><a role="menuitem" href="#">HTML</a></li>
                      <li role="presentation"><a role="menuitem" href="#">CSS</a></li>
                      <li role="presentation"><a role="menuitem" href="#">JavaScript</a></li> */}
            


             
                    </ul>
                </div>
                  

                
              </div>


              <div class="text-right mt-3">
      <button type="button" onClick={updateaccount} class="btn btn-primary">Save changes</button>&nbsp;
   
    </div>


    </div>

    </div>
  )
}

export default AccountPage
