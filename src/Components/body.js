import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function Body() {
  const show=useSelector(
    (store)=>store.slideBarSlice.visible
  )
  return (
    <div className="flex">
        {show?<Sidebar/>:null}
      
        <Outlet/>
    </div>
  )
}

export default Body