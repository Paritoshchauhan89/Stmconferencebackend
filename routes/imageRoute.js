import express from "express";
import multer from "multer";
import cloudinary from "../helper/cloudinaryconfig.js";
import image from "../models/image-schema.js";



const router =  express.Router();



// img storage path
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`);
    }
});

const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true);
    } else {
        callback(new Error("Only images are allowed"));
    }
};

const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
});

router.post("/upload", upload.single("photo"), async (req, res) => {
    try {
        const upload = await cloudinary.uploader.upload(req.file.path);
        const { name } = req.body;
        // const date = moment(new Date()).format("YYYY-MM-DD");
        const imagedata = new image({
            name: name,
            imgpath: upload.secure_url
            // date: date
        });
        console.log(imagedata);
        await imagedata.save();
        res.status(200).json(imagedata);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get("/getfile", async (req, res) => {
    try {
        const getImage = await image.find();
        res.status(200).json(getImage);
    } catch (error) {
        res.status(400).json(error);
    }
});
  
 
export default router;







