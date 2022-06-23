import React from 'react'
import  { useState, useEffect } from 'react'

const ItemOrders = ({data, openmoral, approveorder}) => {


  const [isActive, setActive] = useState('N');



  const toggleClass = () => {
    if(isActive === 'O')
      setActive('N');
    else{
      setActive('O');
    }
    
    approveorder(data.ID, isActive);




  };


  useEffect(() => {
    setActive(data.TRANGTHAI);
  }, []);




  return (

        <tr>
            <td onClick={() => openmoral(data)}>{data.ID}</td>
            <td onClick={() => openmoral(data)}> <img src={data.ANH} alt="" class="thumb-sm rounded-circle mr-2" /> {data.TEN}</td>
            <td onClick={() => openmoral(data)} class="diachi-order">{data.DIACHI}</td>
            <td onClick={() => openmoral(data)}>{data.SOLUONG}</td>
            <td onClick={() => openmoral(data)}>{data.GIA}</td>
            <td><button class={isActive == 'N' ? 'btn btn-xs btn-primary' : 'btn btn-xs btn-default'} type="button" onClick={() => {  toggleClass();}}>{isActive == 'N' ? 'Chờ duyệt' : 'Hoàn tác'}</button> </td>
        </tr>

       )
  
}

export default ItemOrders
