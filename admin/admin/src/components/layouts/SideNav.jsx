import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";

const SideNav = () => {
  return (
    <div className='w-[18%] bg-[#2874f0] text-white  h-[100vh]'>
        <div>
            <img src="logo.png"  className='w-[60%] mt-5 mx-3.5' alt="" />
        </div>
        <div className='px-3 mt-5 text-sm'>
            Menu
        </div>
        <div className='text-sm  mt-2 mr-12 '>
            <ul className="py-4  ">
                <li className="pb-1 border-b-2 border-[#8871f3]">
                    Manage User
                </li>
                <li className="pb-1">
                    Manage seller
                </li>
                <li className="pb-1">
                    Manage product
                </li>
                <li className="pb-1">
                    Monitor Products
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideNav
