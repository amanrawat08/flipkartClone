
const TopHeader = () => {
  return (
    <div className="w-full px-8 py-2 bg-[#1844bc]">
      <div className="flex items-center gap-12">

        {/* Logo */}
        <div className="flex text-white items-center font-light text-sm gap-5">
        <img src="logo.png" className="w-36" alt="logo" />
          <span>
            New Delhi, India
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 ">
          <input
            type="text"
            name="productName"
            className="w-full border border-gray-300 px-4 py-2 rounded-sm text-white active:border-0 focus:outline-0 placeholder:text-white placeholder:text-[14px]"
            placeholder="Search..."
          />
        </div>

        {/* Right Section */}
         
        <div className="flex items-center justify-end gap-8  text-white">
          
          <button className="font-medium bg-white px-4 text-[#1844bc] text-2xl py-1">Login</button>
          <div className="font-medium text-sm">Become a Seller</div>
          <div className="font-medium text-sm">More</div>
          <div className="font-medium text-sm">Cart</div>
        </div>

      </div>
    </div>
  )
}

export default TopHeader
