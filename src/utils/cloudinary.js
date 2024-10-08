import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

const UploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        // file upload
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has uploaded successfully
       fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export { UploadOnCloudinary }