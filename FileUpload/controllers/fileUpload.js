const File=require("../model/File");
const cloudinary=require("cloudinary").v2; 

exports.localFileUpload= async (req,res)=>{
    try
    {

     const file=req.files.file;
     console.log("File came",file);
     
     let path=__dirname+"/files/"+Date.now()+'.jpeg';
     file.mv(path,(err)=>{console.log(err)});
     
     res.json({success:true,message:"File uploaded successfully",});

    }
    catch(error)
    {
       console.log(error);
    }
}

async function uploadFileToCloudinary(file,folder,quality)
{
    const options={folder};
    if(quality)
    {
        options.quality=quality;
    }
    options.resource_type="auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.imageUpload= async(req,res)=>{
    try
    {
       const {name,email,tags}=req.body;
       console.log(name,email,tags);
       const file=req.files.imagefile; 
       console.log(file);
       const supportedTypes=["jpg","jpeg","png"];
       const filetype=file.name.split('.')[1].toLowerCase();
       console.log(filetype);
       if(!(supportedTypes.includes(filetype)))
        {
            return res.status(500).json({status:true,message:"File format is invalid"});
        }  
        const response=await uploadFileToCloudinary(file,"anmol_folder");
        const fileData=await File.create({name,tags,email,imageUrl:response.secure_url,});
        res.json({success:true,imageUrl:response.secure_url,message:"Image uploaded successfully",});
    }
    catch(error) 
    {
    console.error(error); 
    res.status({success:false,message:"File not uploaded successfully",});
    }
}

exports.videoUpload=async(req,res)=>{
    try
    {
        const {name,email,tags}=req.body;
        console.log(name,email,tags);
        const file=req.files.videofile; 
       console.log(file);
       const supportedTypes=["mp4","mov"];
       const filetype=file.name.split('.')[1].toLowerCase();
       console.log(filetype);
       if(!(supportedTypes.includes(filetype)))
        { 
            return res.status(500).json({status:true,message:"File format is invalid"});
        }  
        const response=await uploadFileToCloudinary(file,"anmol_folder");
        const fileData=await File.create({name,tags,email,videoUrl:response.secure_url,});
        res.json({success:true,vidoeUrl:response.secure_url,message:"Video  uploaded successfully",});
         
    }
    catch(error)
    {
        console.log(error);
    }
}
exports.imageSizeReducer=async(req,res)=>{
    try
    {
        const {name,email,tags}=req.body;
        console.log(name,email,tags);
        const file=req.files.imagefile; 
        console.log(file);
        const supportedTypes=["jpg","jpeg","png"];
        const filetype=file.name.split('.')[1].toLowerCase();
        console.log(filetype);
        if(!(supportedTypes.includes(filetype)))
         {
             return res.status(500).json({status:true,message:"File format is invalid"});
         }  
         const response=await uploadFileToCloudinary(file,"anmol_folder",30);
         const fileData=await File.create({name,tags,email,imageUrl:response.secure_url,});
         res.json({success:true,imageUrl:response.secure_url,message:"Image uploaded successfully",});
    }
    catch(error)
    {
        console.log(error);
    }
}