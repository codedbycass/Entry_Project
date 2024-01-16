//CONTROLLER FOR ENTRIES
import { Entry } from "../models/Entry.js" // import the schema
import pkg from 'mongodb'
const { ObjectID } = pkg

//CREATE CONTROLLER
export const createPost = async (req, res) => {
    try {
      // Create post with or without image
        await Entry.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
        console.log("Post has been added!")
        res.status(200).send({ message: "Post added successfully" })
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Error adding post" })
    }
}


//READ CONTROLLER
export const getEntries = async (req, res) => {
    try {
        const entries = await Entry.find().lean()
        res.json({entries: entries})
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
    }
}