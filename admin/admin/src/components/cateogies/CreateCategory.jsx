import { useState } from "react";
import axios from "axios";
import { API_FRONT } from "../../utils/comman";
const CreateCategory = () => {
  const [banner, setBanner] = useState(null);
  const [navImage, setNavImage] = useState(null);
  const [offerBanner, setOfferBanner] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [categorySlug, setCategorySlug] = useState('');
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', categoryName);
    formData.append('slug', categorySlug);
    if (navImage) {
      formData.append('navImage', navImage);
    }
    if (banner) {
      formData.append('banner', banner);
    }
    if (offerBanner) {
      formData.append('offerBanner', offerBanner);
    }
  //  console.log(formData);

    try {
      // Now you can send formData to your backend using fetch or axios
      const res = await axios.post(`${API_FRONT}/category/createCategory`, formData,{
        withCredentials:true,
      });
      console.log(res.data);

    } catch (error) {
      console.error('Error creating category:', error) 

    }

  };
  return (
    <div>
      <div className="m-4 mt-4 p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-black ">Create Category</h1>
        <form action="" type="multipart/form-data" className="mt-4 flex flex-wrap  items-center" onSubmit={handleFormSubmit}>
          <div className="mb-4 flex-1/3 mr-2">
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter category name" required value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
          </div>
          <div className="mb-4 flex-1/3 mr-2">
            <input type="text" id="slug" name="slug" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter category slug" required value={categorySlug} onChange={(e) => setCategorySlug(e.target.value)} />
          </div>
          {/** Category Navigation Image */}
          <div className="upload-box mb-4 flex-1/3 mr-2 w-full  border border-gray-300 rounded-md">
            <label for="file-upload" className="custom-file-upload">
              📁 Category Nav Img
            </label>
            <input id="file-upload" type="file" accept="image/*" onChange={(e) => setNavImage(e.target.files[0])
            } />
            <span id="file-name file-text">No file chosen</span>
          </div>
          {/* multiple image banners */}
          <div className="upload-box mb-4 flex-1/3 mr-2 w-full  border border-gray-300 rounded-md">
            <label for="multiple-banners" className="custom-file-upload">
              📁 Multiple Banners
            </label>
            <input id="multiple-banners" type="file" accept="image/*" onChange={(e) => setBanner(e.target.files[0])} />
            <span id="file-banner file-text">No file chosen</span>
          </div>

          {/** offer poster */}
          <div className="upload-box mb-4 flex-1/1 mr-2 w-full  border border-gray-300 rounded-md">
            <label for="file-offer" className="custom-file-upload">
              📁 Category Nav Img
            </label>
            <input id="file-offer" type="file" accept="image/*" onChange={(e) => setOfferBanner(e.target.files[0])} />
            <span id="file-offer file-text">Offer Banners</span>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Create Category</button>

        </form>
      </div>
    </div>
  )
}

export default CreateCategory
