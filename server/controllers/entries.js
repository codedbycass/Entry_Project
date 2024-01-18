//CONTROLLER FOR ENTRIES
import { Entry } from "../models/Entry.js" // import the schema
import pkg from 'mongodb'
const { ObjectID } = pkg

//CREATE CONTROLLER
export const createPost = async (req, res) => {
    try {
      console.log("Received request:", req);
      const { firstName, lastName } = req.body;
      await Entry.create({ firstName, lastName });
      console.log("Post has been added!");
      // res.status(200).send({ message: "Post added successfully" });
      res.json({ message: "Post has been added!" }); // Send as JSON response
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: "Error adding post" });
    }
  };
  
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