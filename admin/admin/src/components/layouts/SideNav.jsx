import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";

const SideNav = () => {
    return (
        <div className=' bg-[#2874f0] text-white  h-[100vh]'>
            <div>
                <img src="logo.png" className='w-[250px] pr-4 mt-5 ml-3.5' alt="" />
            </div>
            <div className='text-sm  mt-2  '>
                <ul className="py-4 dashboard-menu ">
                    <li className=" ">
                        <ul className="">
                            <div className="flex items-center justify-between">
                                <span>
                                    Manage Categories
                                </span>
                                <MdArrowDropDown />
                            </div>

                            <li>
                                Add new Categoies
                            </li>
                            <li>
                                view Categories
                            </li>

                        </ul>
                    </li>
                    <li className="">
                        Manage User
                    </li>
                    <li className="">
                        Manage seller
                    </li>
                    <li className="">
                        Manage product
                    </li>
                    <li className="">
                        Monitor Products
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav
