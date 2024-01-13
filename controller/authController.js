import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helper/authHelper.js";
import JWT from 'jsonwebtoken';
import otp from "../models/otp.js";
import nodemailer from 'nodemailer'

// register
export const registercontroller = async(req,res)=>{


    try {
        const {name, email,password,answer,role} = req.body 
        // validations
    if(!name || !email || !password || !answer || role){
    return  res.status(200).send({
        success:false,
        message:"Please fill all fields"
      })
    }
        // check user
        const exisitingUser = await userModel.findOne({email})
       // exisiting user
 if (exisitingUser){
    return res.status(200).send({
        success:true,
        message:'Already Register please login',
    })
 }
//  register  user
const hashedPassword = await hashPassword(password)
// save
const user = await  new userModel({name,email,password:hashedPassword,answer,role}).save()
res.status(201).send({
    success:true,
    message:"User Register Successfully",
    user,
});

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        })
        
    }

};

// login

export const logincontroller = async(req,res)=>{

    try {
        const {email,password} = req.body
        // validations
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password'
            })
        }
        // check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            })
        }
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid Password'
            })
        }
        // token
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d",});
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{
              _id: user._id,
                name:user.name,
                email:user.email,
                role:user.role,
            },
            token,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
        
    }

};


// forget password controller

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Emai is required" });
    }
    if (!answer) {
      res.status(400).send({ message: "answer is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "New Password is required" });
    }
    //check
    const user = await userModel.findOne({ email, answer });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email Or Answer",
      });
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};




// test controller
export const testcontroller = (req,res)=>{
    res.send("Protected Routes");
};


// admin access

export const isAdmin = async(req,res,next) =>{
    try {
        const user =  await userModel.findById(req.user._id)
        if(user.role !==1){
            return res.status(401).send({
                success:false,
                message:'Error in isAdmin middleware',
                error,
            });
        }else{
            next();
        }
    } catch (error) {
        console.log(error)
        
    }
}

export const isManager = async(req,res,next) =>{
  try {
      const user =  await userModel.findById(req.user._id)
      if(user.role !==2){
          return res.status(401).send({
              success:false,
              message:'Error in isManager middleware',
              error,
          });
      }else{
          next();
      }
  } catch (error) {
      console.log(error)
      
  }
}

// All users
export const getAllUsers = async (req,res)=>{


    try {
        const users = await userModel.find({})
        return res.status(200).send({
            userCount:users.length,
            success:true,
            message:'all users data',
            users,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error in get All users",
            error,
        })
        
    }
};


export const getUserByIdController =async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await userModel.findById(id)
        if(!user){
            return res.status(404).send({
                success:false,
                message:'user not found with this is ',

            });
        }
        return res.status(200).send({
            success:true,
            message:'fetch single user',
            user,
        });
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success:false,
            message:'error while getting single user',
            error,
        });
        
    }
};

export const updateUserController = async (req, res) => {
    try {
      const userId = req.params.id;
      const { name, email, password } = req.body;
  
      // Validate if at least one field to update is provided
      if (!name && !email && !password) {
        return res.status(400).send({
          success: false,
          message: "At least one field (name, email, or password) is required for update.",
        });
      }
  
      // Find the user by ID
      const user = await userModel.findById(userId);
  
      // Check if the user exists
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "User not found",
        });
      }
  
      // Update user fields if provided
      if (name) {
        user.name = name;
      }
  
      if (email) {
        user.email = email;
      }
  
      if (password) {
        const hashedPassword = await hashPassword(password);
        user.password = hashedPassword;
      }
  
      // Save the updated user
      await user.save();
  
      return res.status(200).send({
        success: true,
        message: "User updated successfully",
        user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        success: false,
        message: "Error while updating user",
        error,
      });
    }
  };
  

export const deleteUserController = async (req, res) => {
    try {
      const user = await userModel.findByIdAndDelete(req.params.id);
      
      // Check if the user exists
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "User not found",
        });
      }
  
      // If the user has a reference to another user
      if (user.user) {
        // Remove the user from the referenced user's 'users' array
        await userModel.findByIdAndUpdate(user.user, {
          $pull: { users: user._id },
        });
      }
  
      return res.status(200).send({
        success: true,
        message: "User Deleted!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        success: false,
        message: "Error while deleting user",
        error,
      });
    }
  };


  // Nazi forgot password

  export const emailsend = async(req,res)=>{
    try {
      const data = await userModel.findOne({email:req.body.email})
      const responseType = {};
      if(data){
        let otpcode = Math.floor((Math.random()*10000)+1);
        let otpdata = new otp({
          email:req.body.email,
          code:otpcode,
          expireIn: new Date().getTime() + 300*1000
        });
        let otpResponse = await otpdata.save();
        responseType.statusText = "success"
        // mailer()
        responseType.message = "Please check ypur email id"
      }else{
        responseType.statusText = "error"
        responseType.message = "Email id not exist"
      }
      res.status(200).json(responseType)
    } catch (error) {
      res.status(500).send({
        success:false,
        message:"Something went wrong",
        error
      })   
    }
  }


  export const changepassword = async(req,res)=>{
    try {
      let data = await otp.find({email:req.body.email, code:req.body.otpCode});
      const response = {}
      if(data){
        let currentTime = new Date().getTime();
        let diff = data.expireIn - currentTime;
        if(diff < 0){
          response.message = 'Token Expire'
          response.statusText = 'Error'
        }else{
          let user = await userModel.findOne({email:req.body.email})
          user.password = req.body.password;
          user.save();
          response.message = 'Password changed successfully'
          response.statusText('success')
        }
      }else{
        res.message = 'invalid otp'
        response.statusText = 'Error'
      }
      res.status(200).json(responseType);
    } catch (error) {
      res.status(500).send({
        success:false,
        message:"Something went wrong",
        error
      })
    }
  }


 const mailer = (email,otp)=>{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
 }