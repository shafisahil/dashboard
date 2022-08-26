import type { NextPage } from 'next'
import AppLayout from '../component/AppLayout'
import { Navbar } from './navbar'
import Sidebar from './sidebar'
import SignInPages from './SigninPage'
const Home: NextPage = () => {
  return (
    <div >
      <SignInPages/>
    {/* <AppLayout/> */}
    </div>
  )
}

export default Home
