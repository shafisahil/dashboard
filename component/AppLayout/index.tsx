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
      <main className='mt-80 ml-80 z-10'>fdsfdsfdsfdfsfds{children}</main>
      <Sidebar/>
    </div>
  )
}
export default AppLayout;