import React from 'react'
import { IoIosAddCircle} from "react-icons/io";
import Order from '../component/Order';

function PurchaseOrder() {
  return (
    <div className='container mx-auto my-2'>
   <div className="tabs">
  <a className="tab tab-lifted tab-active">All</a> 
  <a className="tab tab-lifted ">Done</a> 
</div>
<div className='my-5 flex justify-between'>
<div>
<button className='btn bg-myApp gap-1'> <IoIosAddCircle /> New</button>
</div>
<div>    <input type="search" placeholder="Search here" className="input text-sm input-bordered  input-myApp w-full max-w-xs placeholder:text-myApp" />
</div>
</div>
  <Order />
    </div>
  )
}

export default PurchaseOrder