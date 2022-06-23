import React from 'react'

const DroTypeProduct = ({datas, choselspfu}) => {

  return (
    datas.map(data => {
        return(
            <li onClick={() => choselspfu(data)} role="presentation"><a role="menuitem" href="#">{data.TEN}</a></li>
        )
    })
  )
}

export default DroTypeProduct
