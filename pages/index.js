import React from 'react'
import Sidebar from '../component/Sidebar'
import PurchaseOrder from './PurchaseOrder'

function Home() {
  return (
    <div className='font-bold text-3xl text-red-500 flex'>
    <Sidebar />
    <PurchaseOrder />
    </div>
  )
}

export default Home