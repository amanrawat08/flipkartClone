import { uploadToCloudinary } from "../cloud/cloudinaryConfig.js";
import Categories from "../model/categories.js";

export const createCategory = async (req, res) => {
    try {
        const { name, slug } = req.body;
        const navImage = req.files.navImage?.[0];
        const banners = req.files.banner?.[0];
        const offerBanner = req.files.offerBanner?.[0];

        if (!name || !slug || !navImage || !banners || !offerBanner) {
            return res.status(400).json({
                message: "Enter all fields"
            })
        }

        //upload img;
        const navImgUrl = navImage ? (await uploadToCloudinary(navImage)) : null; 
        const bannerUrl = banners ? (await uploadToCloudinary(banners)) : null; 
        const offerBannerUrl = offerBanner ? (await uploadToCloudinary(offerBanner)) : null; 
        
        try {
            const isDuplicate = await Categories.find({
                $or:[{name}, {slug}]
            });
            if(isDuplicate){
                return res.status(404).json({
                message: "Category already exists"
            })
            }
            
        } catch (error) {
            console.log(error);
            
        }

        try {
           const newCategory = await Categories.create({
            name,
            slug,
            banner:bannerUrl,
            offerBanner:offerBannerUrl,
            navImg:navImgUrl
        }) 
        } catch (error) {
            console.log(error);
            
        }
        

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