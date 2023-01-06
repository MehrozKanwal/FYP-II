import React from 'react'
import { MdDelete,MdModeEdit } from "react-icons/md";

function Order() {
  return (
    <div className=" font-normal w-full overflow-x-scroll scrollbar">
    <table className="table table-compact w-full ">
      <thead>
        <tr>
          <th>S.No</th> 
          <th>Name</th> 
          <th>Quantity</th> 
          <th>Pur-Ord</th> 
          <th>Date</th> 
          <th>Expected Date</th> 
          <th>Amount</th> 
          <th>Status</th>
          <th></th>
        </tr>
      </thead> 
      <tbody>
        <tr>
          <th>1</th> 
          <td>Cy Ganderton</td> 
          <td>5000</td> 
          <td>Littel, Schaden and Vandervort</td> 
          <td>12/5/2020</td>
          <td>12/16/2020</td> 
          <td>43674378</td>
          <td>Active</td>
          <td className='flex'><MdDelete  className='text-xl text-myApp'/><MdModeEdit className='text-xl text-myApp'/></td>
        </tr>
        <tr>
          <th>2</th> 
          <td>Hart Hagerty</td> 
          <td>78478</td> 
          <td>Zemlak, Daniel and Leannon</td> 
          <td>12/5/2020</td> 
          <td>12/5/2020</td> 
          <td>3764578739</td>
          <td>Draft</td>
          <td className='flex'><MdDelete  className='text-xl text-myApp'/><MdModeEdit className='text-xl text-myApp'/></td>        </tr>
         <tr>
          <th>3</th> 
          <td>Brice Swyre</td> 
          <td>46547</td> 
          <td>Carroll Group</td> 
          <td>12/5/2020</td> 
          <td>8/15/2020</td> 
          <td>76746</td>
          <td>Active</td>
 <td className='flex'><MdDelete  className='text-xl text-myApp'/><MdModeEdit className='text-xl text-myApp'/></td>
         
        </tr>
        <tr>
          <th>4</th> 
          <td>Marjy Ferencz</td> 
          <td>647684</td> 
          <td>Rowe-Schoen</td> 
          <td>5/22/2020</td> 
          <td>3/25/2021</td> 
          <td>846098</td>
          <td>Active</td>
 <td className='flex'><MdDelete  className='text-xl text-myApp'/><MdModeEdit className='text-xl text-myApp'/></td>
        </tr>
        <tr>
          <th>5</th> 
          <td>Yancy Tear</td> 
          <td>5676758</td> 
          <td>Wyman-Ledner</td> 
          <td>5/22/2020</td> 
          <td>5/22/2020</td> 
          <td>05937847</td>
          <td>Draft</td>
 <td className='flex'><MdDelete  className='text-xl text-myApp'/><MdModeEdit className='text-xl text-myApp'/></td>

        </tr>
        
        
        
      </tbody>
    </table>
  </div>
  )
}

export default Order