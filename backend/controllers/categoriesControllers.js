import { uploadToCloudinary } from "../cloud/cloudinaryConfig.js";
import categories from "../model/categories.js";

export const createCategory = async (req, res) => {
    try {
        const { name, slug } = req.body;
        const navImage = req.files.navImage?.[0];
        const banners = req.files.banner?.[0];
        const offerBanner = req.files.offerBanner?.[0];

        if (!name || !slug || !navImage || !banners || !offerBanner) {
            return res.status(200).json({
                message: "Enter all fields"
            })
        }




        //upload img;
        const navImgUrl = navImage ? (await uploadToCloudinary(navImage)) : null;
        const bannerUrl = banners ? (await uploadToCloudinary(banners)) : null;
        const offerBannerUrl = offerBanner ? (await uploadToCloudinary(offerBanner)) : null;
        
        
 
        const isDuplicate = await categories.findOne({
            $or: [{ name: name }, { slug }]
        }); 
        
        if (isDuplicate) { 
            console.log("true");
            return res.status(404).json({
                message: "Category already exists"
            })
        }


        const newCategory = await categories.create({
            name,
            slug,
            banner: bannerUrl.secure_url,
            offerBanner: offerBannerUrl.secure_url,
            navImg: navImgUrl.secure_url
        })

        console.log(newCategory);

        return res.status(200).json({
            newCategory,
            message: "Successfully build"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server error"
        })
    }
}


export const getCategories = async(req,res)=>{
    try {
        const allCategories = await categories.find();
        return res.status(200).json({
            allCategories,
            allCategoriesCount: allCategories.length,
            message:"successfully fetched"
        })
    }
    catch (error) {
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}