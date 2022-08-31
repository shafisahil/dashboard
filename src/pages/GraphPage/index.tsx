
import AppLayout from "../../component/AppLayout"

import {TbArrowWaveLeftDown} from "react-icons/tb"
import MyStockChart from "../../component/BarChart"

 const graphhData =[
    {title:'visit',icon:<TbArrowWaveLeftDown/>,quantity:400},
    {title:'TOTAL PAGE VIEWS',icon:<TbArrowWaveLeftDown/>,quantity:2400},
    {title:'NEW USERS',icon:<TbArrowWaveLeftDown/>,quantity:200},
    {title:'BOUNCE RATE',icon:<TbArrowWaveLeftDown/>,quantity:200}
 ]

export default function pages(){
  
    return(
        <>
        <AppLayout>
  <div className=" flex flex-wrap justify-between bg-[#232329] text-white mt-4 ml-72">{graphhData.map((e)=>{
     return(
     <div className="p-4 hover:bg-gray-900 rounded w-[150]">
        <h1 className="text-2xl font-bold">{e.title}</h1>
        <div className="flex text-xl m-2 ">
            <div>{e.icon} </div>
            <div className="px-2">{e.quantity}</div>
            <div>
            <MyStockChart/>
                {/* <Graph/> */}
            </div>
        </div>

  </div> 
  )
  })
  }
  </div>
          {/* <Example/> */}
  
        
        </AppLayout>
        </>
    )
}