import express from 'express'
const router = express.Router()
import { getEntries } from '../controllers/entries.js' // import controllers

import pkg from 'mongodb'
const { ObjectID } = pkg
router.get('/api/getEntries', getEntries)

export { router }