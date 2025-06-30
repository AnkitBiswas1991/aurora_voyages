import React from 'react'
import Heading2 from './components/heading2'
import Editform from './Editform'
import { useLocation } from 'react-router-dom'

const EditDetails = function() {
    const location = useLocation()
    const {dataIndex} = location.state
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex -mx-6 py-8">
            <div className='w-2/3 px-6'>
              <p className='m-0 mb-5 text-xl'>Edit your details</p>
              <Heading2 heading={'Edit Form:'}/>
              <Editform dataNum={dataIndex}/>
            </div>
            <div className="w-1/3 px-6">
            </div>
        </div>
      </div>
    </div>
  )
}

export default EditDetails
