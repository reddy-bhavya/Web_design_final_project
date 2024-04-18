import React from 'react'
import './DesciptionBox.css'

const DesciptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Quidem nemo officiis dolor voluptatibus voluptatum expedita ut, 
               nostrum ducimus error dignissimos, omnis itaque modi aspernatur consectetur?
               Cumque temporibus ea illum esse consectetur, incidunt, eaque hic aut optio aliquam 
               error nisi quae et neque quas provident libero ducimus pariatur enim, quia saepe.</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora culpa recusandae
               amet sequi. Ducimus tempora cumque sit sed odio consequatur!</p>
        </div>
    </div>
  )
}

export default DesciptionBox