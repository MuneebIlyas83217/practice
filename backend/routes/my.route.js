import express from "express";

const router = express.Router();


router.get('/',(req,res)=>{
    res.send("Hello My router");
})

router.get('/about',(req,res)=>{
    res.send("Some changes are made from my side, here you can check now, all ok now.");
})

export default router;


// actually mujhe galtii lagii thi, comaand /"
//no issue sir 
// real command  " git clone link " hai. ok

// all ok , now this new file is ceated, and we made seveal changes in code, now we re gonna push code. ok
// hmay main folder say code ko push krna hota ha, so move back 