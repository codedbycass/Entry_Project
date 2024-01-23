import mongoose from "mongoose"

const EntrySchema = new mongoose.Schema({
  entryDate: {
    type: String
  },
  sleep: {
    type: String
  },
  wake: {
    type: String
  },
  reflections: {
    type: String
  },
  movement: {
    type: String
  },
  periodStatus: {
    type: String
  },
  sexualActivity: {
    type: String
  },
  food: {
    type: String
  },
  media: {
    type: String
  },
  image: { // be able to add pics
    type: String
  },
  cloudinaryId: { // be able to add pics
    type: String,
    require: true
  }
})


const Entry = mongoose.model(
  "Entry",
  EntrySchema,
  "Entry"
)

export { Entry }
