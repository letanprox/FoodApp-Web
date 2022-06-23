import React from 'react'
import $ from "jquery";
import ItemOrders from './ItemOrders';

import axios from 'axios';
import  { useState, useEffect } from 'react'
import DetailOrder from './DetailOrder';


const OrdersPage = () => {


  const [datas, setdatas] = useState([]);
  const [datacheck, setdatacheck] = useState([]);
  const [datadetail, setdatadetail] = useState([]);


    let openmoral = (data) =>{
        setdatacheck(data);
        loaddetailorder(data.ID)
        $('#clickmoral').click();
    }


    let loaddetailorder = (idorder) =>{
      axios.get('http://localhost:4000/api/w1/cuahang/donhang/detail?idorder='+idorder)
      .then(function (response) {
        setdatadetail(response.data['recordset']);
        // console.log(response.data);
        console.log(datadetail);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
  }

    let loadorders = () =>{
        axios.get('http://localhost:4000/api/w1/cuahang/donhang/list')
        .then(function (response) {
          setdatas(response.data['recordset']);
          console.log(response.data);
          console.log(datas);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
        });
    }

    useEffect(() => {
      loadorders();
    }, []);


    let approveorder = (ID, status) =>{
      console.log(ID, status)

      if(status === 'O')
        status = 'N';
      else{
        status = 'O';
      }


      axios.get('http://localhost:4000/api/w1/order/update/approve?trangthai='+status+'&id='+ID)
      .then(function (response) {

        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });

      
    }


  return (
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="header-title pb-3 mt-0">Các đơn hàng</h5>
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr class="align-self-center">
                         
                                    <th>Mã</th>
                                    <th>Tên khách hàng</th>
                                    <th>Địa chỉ</th>
                                    <th>Tổng số</th>
                                    <th>Tổng tiền</th>
                                    <th>Duyệt</th>
                                </tr>
                            </thead>
                            <tbody>


                            {datas.map(data => {

              
                              return(
                                <ItemOrders  data={data} openmoral={openmoral} approveorder={approveorder} />
                                )
                              })
                            }

                             
                            {/* 
                                <tr onClick={openmoral}>
                                    <td>12</td>
                                    <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="thumb-sm rounded-circle mr-2" /> Kevin Heal</td>
                                    <td class="diachi-order">97 / Man Thiện, Hiệp phú, Quận 9</td>
                                    <td>12</td>
                                    <td>$15,000</td>
                                    <td><button class="btn btn-xs btn-primary disabled" type="button" disabled="disabled">Chờ duyệt</button> </td>
                                </tr>

                                <tr>
                                    <td>12</td>
                                    <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="thumb-sm rounded-circle mr-2" /> Kevin Heal</td>
                                    <td class="diachi-order">97 / Man Thiện, Hiệp phú, Quận 9</td>
                                    <td>12</td>
                                    <td>$15,000</td>
                                    <td><button class="btn btn-xs btn-default" type="button" >Hoàn tác</button></td>
                                </tr> */}
         

                            </tbody>
                        </table>
                    </div>
    
                    <div class="pt-3 border-top text-right"><a href="#" class="text-primary">View all <i class="mdi mdi-arrow-right"></i></a></div>
                </div>
            </div>
        </div>


        <button type="button" id='clickmoral' style={{display:"none"}} class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

  
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog moral-center"  role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Thông tin hóa đơn</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <DetailOrder datacheck={datacheck}  datadetail={datadetail} />

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>





    </div>
  )
}

export default OrdersPage
