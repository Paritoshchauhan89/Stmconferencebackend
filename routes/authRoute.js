import express from 'express'
import {registercontroller, logincontroller, testcontroller,getAllUsers,getUserByIdController,updateUserController, deleteUserController, isAdmin, forgotPasswordController, isManager, emailsend, changepassword } from '../controller/authController.js'
import { requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router()

// routing

router.post('/register',registercontroller);
router.post('/login',logincontroller);
router.get('/all-users',getAllUsers);
router.get('/get-user/:id', getUserByIdController);
router.put('/edit-user/:id',updateUserController)
router.delete('/delete-user/:id', deleteUserController);

router.post('/email-send', emailsend);
router.post('/change-password', changepassword);



// forget Password
router.post('/forgot-password',forgotPasswordController)


// protected user route auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).send({ ok: true });
});


// protected Admin route auth
router.get('/admin-auth',requireSignIn, isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

// protected Manager route auth
router.get('/manager-auth',requireSignIn, isManager,(req,res)=>{
    res.status(200).send({ok:true});
})


export default router