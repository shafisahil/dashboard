import {BsReverseLayoutTextSidebarReverse,BsChevronCompactDown} from 'react-icons/bs'
import {IoIosNotificationsOutline} from 'react-icons/io'
import Image from 'next/image'
import img from '../../../public/me.jpg'
import {RiRadioLine} from 'react-icons/ri'
export const Navbar =()=>{
return(
    <>
    <div className=" fixed w-screen bg-[#232329] p-1 text-gray-300 flex justify-between items-center font-bold rounded">
        <div className=' flex space-x-4 items-center text-2xl text-white'>
        <BsReverseLayoutTextSidebarReverse/>
        <h2>AppLook</h2>
        </div>
        <div className='flex space-x-5 items-center pr-5 '>
                <input type="search" placeholder='Search' className='p-1 pl-4 rounded-full font-normal text-sm'/>
                <IoIosNotificationsOutline className='text-3xl'/>
                <RiRadioLine className='text-3xl'/>
                <div className='flex items-center space-x-2'>
                <Image
                    src={img}
                    alt="Picture of the author"
                width={35}
                 height={35}
                 className='rounded-full bg-red-300'
                />
                <h2>Shafi Ahmed</h2>
                <BsChevronCompactDown/>
               </div>
               <div className='flex space-x-3 items-center'>
                <h2>ENG</h2>
                <BsChevronCompactDown/>
               </div>
               

        </div>
    </div>
    </>
)
}