//CONTROLLER FOR ENTRIES
import { Entry } from "../models/Entry.js" // import the schema
import pkg from 'mongodb'
const { ObjectID } = pkg

//CREATE CONTROLLER
// Send new post to client side
export const createPost = async (req, res) => {
    try {
      console.log("Received request:", req);
      const { 
        entryDate,
        sleep,
        wake,
        reflections,
        movement,
        periodStatus,
        sexualActivity,
        food,
        media
        } = req.body;
      const newPost = await Entry.create({ 
        entryDate,
        sleep,
        wake,
        reflections,
        movement,
        periodStatus,
        sexualActivity,
        food,
        media});
      console.log("Post has been added!");
      // res.status(200).send({ message: "Post added successfully" });
      res.json({ message: "Post has been added!", data: newPost }); // Send as JSON response
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
//UPDATE

//DELETE
export const deleteEntry = async (req, res) => {
  try {
    // Find post by ID
    const entry = await Entry.findById(req.params.id)
    // Check if post exists
    if (!entry) {
      return res.status(404).send({ message: "Post not found" })
    }
    // Check if authenticated user is creator of post
    // if (entry.user.toString() !== req.user._id.toString()) {
    //   return res
    //     .status(403)
    //     .send({ message: "Not authorized to delete this post" })
    // }
    // // Delete image from cloudinary if it exists
    // if (post.cloudinaryId) {
    //   await cloudinary2.uploader.destroy(post.cloudinaryId)
    // }

    // Delete post from MDB
    await Entry.deleteOne({ _id: req.params.id })

    res.status(200).send({ message: "Post deleted successfully" })
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: "Error deleting post" })
  }
}