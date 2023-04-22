import React from 'react'
import angular from './images/angular.jpg'
import bootstrap from './images/bootstrap5.png'
import ccsharp from './images/ccsharp.png'
import kompleweb from './images/kompleweb.jpg'
import './Component.css'


const courseMap = {
    angular:angular,
    bootstrap,
    ccsharp,
    kompleweb,
}

function Component({courseName}) {
  return (
    <div className='courseDiv'>
      <img src={courseMap[courseName]} alt="" className='course'/> 
    </div>
  )
}

export default Component
