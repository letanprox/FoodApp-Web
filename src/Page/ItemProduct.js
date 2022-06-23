import React from 'react'

const ItemProduct = ({datas, loadupdatesanpham}) => {

  return (

    datas.map(data => {
        return(
            <div onClick={() => loadupdatesanpham(data)} class="drive-item module text-center">
    <div class="drive-item-inner module-inner">
        <div class="drive-item-title"><a href="#">{data.TEN}</a></div>
        <div class="drive-item-thumb">
            <a href="#"><img class="img-responsive" src={data.ANH} alt=""/></a>
        </div>
    </div>
    <div class="drive-item-footer module-footer">
        <ul class="utilities list-inline">
            <li><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Download"><i class="fa fa-heart"></i> 3</a></li>
            <li><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i class="fa fa-archive"></i> 14</a></li>
        </ul>
    </div>
    </div>
        )
    })
  )
}

export default ItemProduct
