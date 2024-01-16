//ROUTES FOR ENTRIES
import express from 'express'
import { upload } from '../middleware/multer.js'
import { 
    getEntries,
    createPost
} from '../controllers/entries.js' // import controllers
// import auth later so only logged in users can make posts

const router = express.Router()

import pkg from 'mongodb'
const { ObjectID } = pkg

//CREATE
router.post('/api/createPost', createPost)

//READ
router.get('/api/getEntries', getEntries)

//UPDATE
//like/favorite
export { router }