import mongoose from "mongoose"

const EntrySchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
})

const Entry = mongoose.model(
  "Entry",
  EntrySchema,
  "Entry"
)
export { Entry }
