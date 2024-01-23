//ROUTES FOR ENTRIES
import express from 'express'
import { upload } from '../middleware/multer.js'
import { 
    getEntries,
    createPost,
    deleteEntry
} from '../controllers/entries.js' // import controllers
// import auth later so only logged in users can make posts

const router = express.Router()

import pkg from 'mongodb'
const { ObjectID } = pkg

//CREATE
router.post('/api/createPost', upload.single("file"), createPost)

//READ
router.get('/api/getEntries', getEntries)

//UPDATE
//like/favorite

//DELETE
router.delete('/api/deleteEntry/:id', deleteEntry)

export { router }