import React from 'react'
import { useLocation } from 'react-router-dom'

const Menu = () => {


  const location = useLocation();
  console.log(location.pathname);

  let storeClass = location.pathname.match('/store') ? "active" : "";
  let ordersClass = location.pathname.match(/^\/orders/) ? "active" : "";
  let staticClass = location.pathname.match(/^\/static/) ? "active" : "";
  let accountClass = location.pathname.match(/^\/account/) ? "active" : "";

  return (
    <div   class="side-bar">
    <nav class="side-menu">
        <ul class="nav">
            <li class={storeClass}><a href="/store/"><span class="fa fa-cube"></span> Sản phẩm</a></li>
            <li class={ordersClass}><a href="/orders/"><span class="fa fa-check-square-o" ></span> Đơn hàng</a></li>
            <li class={staticClass}><a href="/static/"><span class="fa fa-pie-chart" > </span> Thống kê</a></li>
            <li class={accountClass}><a href="/account/"><span class="fa fa-home"></span> Cửa hàng</a></li>

            {/* <li><a href="user-drive.html"><span class="fa fa-th"></span> Drive</a></li>
            <li><a href="#"><span class="fa fa-clock-o"></span> Reminders</a></li> */}
        </ul>
    </nav>



</div>
  )
}

export default Menu
