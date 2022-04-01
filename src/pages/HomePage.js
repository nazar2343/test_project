import {Navigate} from 'react-router-dom'
import React from 'react'

const HomePage = () => {
     return (
          <div>
          <Navigate replace to='/login'/>
          </div>
     
     )
}

export default HomePage