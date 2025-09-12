import { v2 as cloudinary } from 'cloudinary'
import { response } from 'express';
import fs from 'fs'
import { resourceUsage } from 'process';

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_SECRET,
});



const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // file has been upload successfully!
        console.log("file is upload on cloudinary : ", response.url);
        return response


    } catch (error) {
        fs.unlinkSync(localFilePath)
        //remove the locally saved temporoy file as the upload operation got failed
        return null;
    }

}

export {uploadOnCloudinary}

//upload remote GoogleDrive image and apply auto-tagging 
cloudinary.uploader.upload(
    'https://drive.google.com/file/d/1gnXAJZh-Of70TzpU1Meja4TAgqc6CVe7/view',
    {
        public_id: 'bag_model',
        categorization: 'google_tagging',
        auto_tagging: 0.75,
    })
    .then((result) => {
        console.log(result)
    }).catch((error) => { console.log(error) });