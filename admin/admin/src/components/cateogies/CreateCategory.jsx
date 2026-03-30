
const CreateCategory = () => {
  return (
    <div>
      <div className="m-4 mt-4 p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-black ">Create Category</h1>
        <form action="" className="mt-4 flex flex-wrap  items-center" >
          <div className="mb-4 flex-1/3 mr-2">
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter category name" required />
          </div>
          <div className="mb-4 flex-1/3 mr-2">
            <input type="text" id="slug" name="slug" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter category slug" required />
          </div>
          {/** Category Navigation Image */}
          <div class="upload-box mb-4 flex-1/3 mr-2 w-full  border border-gray-300 rounded-md">
            <label for="file-upload" class="custom-file-upload">
              📁 Category Nav Img
            </label>
            <input id="file-upload" type="file" accept="image/*" />
            <span id="file-name">No file chosen</span>
          </div>
          {/* multiple image banners */}
          <div class="upload-box mb-4 flex-1/3 mr-2 w-full  border border-gray-300 rounded-md">
            <label for="file-upload" class="custom-file-upload">
              📁 Category Nav Img
            </label>
            <input id="file-upload" type="file" accept="image/*" />
            <span id="file-name">No file chosen</span>
          </div>

           {/** offer poster */}
          <div class="upload-box mb-4 flex-1/1 mr-2 w-full  border border-gray-300 rounded-md">
            <label for="file-upload" class="custom-file-upload">
              📁 Category Nav Img
            </label>
            <input id="file-upload" type="file" accept="image/*" />
            <span id="file-name">No file chosen</span>
          </div>
           
           
        
          {/*<div className="mb-4 flex-2/2 mr-2 ">
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter category name" required />
          </div>*/}
          <br />
          <br />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Create Category</button>

        </form>
      </div>
    </div>
  )
}

export default CreateCategory
