import { RiRadioLine } from 'react-icons/ri'
import { GrFormNext } from 'react-icons/gr'
import Link  from 'next/link'

const data=[
    {
        icon:<RiRadioLine/> ,name:"Online Marketing Dashboard" ,route:'/he'
    },
    {
        icon:<RiRadioLine/> ,name:"Online Marketing Dashboard"
    },
    {
        icon:<RiRadioLine/> ,name:"Online Marketing Dashboard"
    },
    {
        icon:<RiRadioLine/> ,name:"Online Marketing Dashboard"
    },
    {
        icon:<RiRadioLine/> ,name:"Online Marketing Dashboard"
    },
    {
        icon:<RiRadioLine/> ,name:"Online Marketing Dashboard"
    },
    {
        icon:<RiRadioLine/> ,name:"Online Marketing Dashboard", icone:<GrFormNext onClick={()=>alert("hell")} />
    },
    {
        icon:<RiRadioLine/> ,name:"Online Marketing Dashboard"
    },
]

export default function Sidebar(){
    return(<>
    <div className='w-72 bg-black text-white h-screen overflow-y-auto pt-16'>
    <div>
       {
        data.map((e:any)=>{
         return <div className='flex  text-sm items-center space-x-5 p-2 hover:bg-sky-400 hover:border-red-400 hover:border-l-4 '>
            <div>{e.icon}</div>
            <div>{e.name}</div>
            <div>{e.icone}</div>
         
         </div>
         }
        )
        }
    </div>
    <hr className='text-white my-4' />
    <div>
       {
        data.map((e:any)=>{
         return <div className='flex text-sm items-center space-x-5 p-2  hover:bg-sky-400 hover:border-red-400 hover:border-l-4'>
            <div className=''>{e.icon}</div>
            <div>{e.name}</div>
            <div className=' text-right'>{e.icon1}</div>
         
         </div>
         }
        )
        }
    </div>
    
    <hr className='text-white my-4' />
    <div>
       {
        data.map((e:any)=>{
         return <div className='flex text-sm items-center space-x-5 p-2  hover:bg-sky-400 hover:border-red-400 hover:border-l-4'>
            <div className=''>{e.icon}</div>
            <div>{e.name}</div>
            <div className=' text-right'>{e.icon1}</div>
         
         </div>
         }
        )
        }
    </div>
    <hr className='text-white my-4' />
    <div className='flex space-x-5 p-2 hover:bg-sky-400 hover:border-red-400 hover:border-l-4 items-center'>
    <RiRadioLine/>
    <Link href="/SigninPage">
    <h2>LOGOUT</h2></Link>
    </div>
    <hr className='text-white my-4' />
    <div className='flex space-x-5 p-2 hover:bg-sky-400 hover:border-red-400 hover:border-l-4 items-center'>
    <RiRadioLine/>
    <h2>Documentation</h2>
    </div>
    </div>
    </>)
}