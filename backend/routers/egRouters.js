const express=require('express');
const router=express.Router();
const {getRoute,signupRoute,loginRoute,postRoute,putRoute,deleteRoute, getRouteById}=require('../controllers/egController')
router.get('/get/:id', getRouteById);
router.get('/get',getRoute)
router.post('/login',loginRoute)
router.post('/signup',signupRoute)
router.post('/post', postRoute);
router.put('/put/:id', putRoute);
router.delete('/delete/:id', deleteRoute);


 
module.exports=router