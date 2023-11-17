const {getCharById}=require("../controllers/getCharById")
const router= require('express').Router()
const deleteFav=require("../controllers/deleteFav")
const login=require("../controllers/login")
const postFav=require("../controllers/postFav.js")
const postUser=require ("../controllers/postUser.js")

router.get("/character/:id", getCharById);

router.get("/login", login)

router.post('/user', postUser)

router.post("/fav",postFav)

router.delete("/fav/:id",deleteFav)

module.exports=router;



