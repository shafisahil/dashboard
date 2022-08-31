import React, { FC } from 'react'
import { Navbar } from '../navbar';
import Sidebar from '../sidebar';

interface IProps {
    children?: React.ReactNode;
}

const AppLayout :FC<IProps> = ({children}) => {
  return (
    <div className=''>
      <Navbar />
      <div className='flex'>
      <Sidebar/>
      <main className=''>fdsfdsfdsfdfsfds{children}</main>
      </div>
      
    </div>
  )
}
export default AppLayout;