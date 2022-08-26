import React, { FC } from 'react'
import { Navbar } from '../../pages/navbar'
import Sidebar from '../../pages/sidebar'
interface IProps {
    children?: React.ReactNode;
}

const AppLayout :FC<IProps> = ({children}) => {
  return (
    <div>
      <Navbar />
      <div className='flex'>
      <Sidebar/>
      <main className=''>fdsfdsfdsfdfsfds{children}</main>
      </div>
      
    </div>
  )
}
export default AppLayout;