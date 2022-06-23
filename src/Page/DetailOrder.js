import React from 'react'

import axios from 'axios';
import  { useState, useEffect } from 'react'

const DetailOrder = ({datacheck, datadetail}) => {



  // let idorder = datasx.ID;

  //   const [datas, setdatas] = useState([]);

  //   let loaddetailorder = () =>{
  //       axios.get('http://localhost:4000/cuahang/donhang/detail?idorder='+idorder)
  //       .then(function (response) {
  //         setdatas(response.data['recordset']);
  //         console.log(response.data);
  //         console.log(datas);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       })
  //       .then(function () {
  //       });
  //   }

  //   useEffect(() => {
  //       loaddetailorder();
  //   }, []);



  return (
<div class="modal-body">



<table class="table">
  <thead>
    <tr>
      <th scope="col">Mã</th>
      <th scope="col">Tên</th>
      <th scope="col">Số Lượng</th>
      <th scope="col">Giá</th>
    </tr>
  </thead>
  <tbody>




{    datadetail.map(data => {
        console.log(data)
        return(
          <tr>
          <th scope="row">{data.ID_SANPHAM}</th>
          <td>{data.TEN}</td>
          <td>{data.SOLUONGBAN}</td>
          <td>{data.GIA}</td>
        </tr>
        )
    })}

  </tbody>
</table>

<ul class="list-group">
  <li class="list-group-item">Mã hóa đơn: {datacheck.ID}</li>
  <li class="list-group-item">Địa chỉ: {datacheck.DIACHI}</li>
  <li class="list-group-item">Tổng số: {datacheck.SOLUONG}</li>
  <li class="list-group-item">Thành tiền: {datacheck.GIA}</li>
</ul>







      </div>
  )
}

export default DetailOrder
