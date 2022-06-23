import React from 'react'
import ItemProduct from './ItemProduct';
import axios from 'axios';
import  { useState, useEffect } from 'react'
import $ from "jquery";
import AddProduct from './AddProduct';

import { useCookies } from 'react-cookie';


const StorePage = () => {


    const [cookies, setCookie] = useCookies(['user']);


    console.log(cookies.IDCUAHANG);


    const [status, setstatus] = useState(0);
    const [datas, setdatas] = useState([]);
    const [datax, setdatax] = useState({
        "ID": '',
        "TEN": "0",
        "SOLUONGBAN": '',
        "ANH": "https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png",
        "GIA": '',
        "IDCUAHANG": ''
    });

    let loadsanpham = () =>{
        axios.get('http://localhost:4000/api/cuahang/sanpham/list?id='+cookies.IDCUAHANG)
        .then(function (response) {
          setdatas(response.data['recordset']);

        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
        });
    }


    let loadupdatesanpham = (dataxs)=>{
        setdatax(dataxs);
        console.log("chuaco------");
        $(".hidden").click();
        console.log(datax);
        setstatus(1);
    }

    let loadinsertsanpham = () =>{

        setstatus(0);
        setdatax([{
            "ID": '',
            "TEN": "0",
            "SOLUONGBAN": '',
            "ANH": "https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png",
            "GIA": '',
            "IDCUAHANG": ''
        }]);
        $(".hidden").click();
    }



    useEffect(() => {
        loadsanpham();
    }, []);




  return (
    <div class="content-panel">
    <div class="content-header-wrapper">
        <h2 class="title">Cửa hàng của tôi</h2>
        <div class="actions">
            <button class="hidden"  data-toggle="modal" data-target="#myModal"><i class="fa fa-plus"></i></button>

            <button onClick={loadinsertsanpham} class="btn btn-success"><i class="fa fa-plus"></i>  Thêm sản phẩm</button>
        </div>
    </div>
    <div class="content-utilities">

        <div class="actions">
            <div class="btn-group">
                <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false"><i class="fa fa-filter"></i> Mới nhất <span class="caret"></span></button>
                <ul class="dropdown-menu">
                    <li><a href="#">Mới nhất</a></li>
                    <li><a href="#">Yêu thích</a></li>
                    <li><a href="#">Số lượng</a></li>
                </ul>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Refresh"><i class="fa fa-refresh"></i></button>

            </div>
        </div>
    </div>
    <div class="drive-wrapper drive-grid-view">
        <div class="grid-items-wrapper">

        <ItemProduct datas={datas} loadupdatesanpham={loadupdatesanpham} />

            {/* <div class="drive-item module text-center">
                <div class="drive-item-inner module-inner">
                    <div class="drive-item-title"><a href="#">Bún bò</a></div>
                    <div class="drive-item-thumb">
                        <a href="#"><img class="img-responsive" src="https://cdn.tgdd.vn/2021/04/CookProduct/1-1200x676-21.jpg" alt=""/></a>
                    </div>
                </div>
                <div class="drive-item-footer module-footer">
                    <ul class="utilities list-inline">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Download"><i class="fa fa-heart"></i> 3</a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i class="fa fa-archive"></i> 14</a></li>
                    </ul>
                </div>
            </div> */}

        </div>
    </div>


    <AddProduct loadsanpham={loadsanpham} datax={datax} status={status}/>

</div> 
  )
}

export default StorePage
