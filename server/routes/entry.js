//ROUTES FOR ENTRIES
import express from 'express'
import { upload } from '../middleware/multer.js' // to handle photo uploads
import { 
    getEntries,
    createPost,
    deleteEntry
} from '../controllers/entries.js' // import controllers
import {
    getLogin,
    postLogin,
    logout,
    getSignUp,
    postSignUp
} from '../controllers/auth.js'
// import auth later so only logged in users can make posts

const router = express.Router()

import pkg from 'mongodb'
const { ObjectID } = pkg


//CRUD FOR LOGIN/SIGNUP
router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/logout", logout);
router.get("/signup", getSignUp);
router.post("/signup", postSignUp);


//CRUD FOR ENTRIES
//CREATE
router.post('/createPost', upload.single("file"), createPost)
//READ
router.get('/getEntries', getEntries)
//UPDATE
//like/favorite
//DELETE
router.delete('/deleteEntry/:id', deleteEntry)

export { router }