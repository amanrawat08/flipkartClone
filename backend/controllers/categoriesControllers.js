import { uploadToCloudinary } from "../cloud/cloudinaryConfig.js";

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
        console.log(navImgUrl.secure_url);
        const bannerUrl = banners ? (await uploadToCloudinary(banners)) : null;
        console.log(bannerUrl);
        const offerBannerUrl = offerBanner ? (await uploadToCloudinary(offerBanner)) : null;
        console.log(offerBannerUrl);
        
        

        return res.status(200).json({
            navImgUrl : navImgUrl.secure_url,
            bannerUrl : bannerUrl.secure_url,
            offerBannerUrl: bannerUrl.secure_url,
            message: "Successfully build"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server error"
        })
    }
}