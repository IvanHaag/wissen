import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="flex flex-row flex-1 w-full h-full">
      <Sidebar />
      <div className="flex w-full h-full pt-16 overflow-x-hidden overflow-y-auto flex-0">
        <Outlet />
      </div>
    </div>
    // <div className="flex flex-col h-screen">
    //   <div className="flex bg-red-500 h-52 flex-0">putas</div>
    //   <div className="flex flex-1">
    //     <div className="bg-green-500 w-52">
    //       <div className="flex self-end">side</div>
    //     </div>
    //     <div className="flex justify-center flex-1 overflow-auto bg-blue-500">
    //       <div className="bg-yellow-500 h-[1500px]">out</div>
    //     </div>
    //   </div>
    // </div>
  )
}
