import React from 'react'
import inventorySummary from './inventorysummary/page'
import salesOverview from './salesoverview/page'
import salesAndPurchase from './salesandpurchase/page'

const page = () => {
  return (
    <div className='text-black bg-green-500 p-5'>
        <p className=''>Inventory Manager Dashboard</p>
        <inventorySummary />
        <salesOverview />
        <salesAndPurchase />
    </div>
  )
}

export default page
