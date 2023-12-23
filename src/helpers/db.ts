// db.ts
import mongoose from "mongoose";

const url: string = process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  console.log("Component did mount!");
  console.log(" ISHA " + url);

  if (!connection) {
    connection = await mongoose.connect(
      "mongodb+srv://ivstudent:calpoly_rocks@h4ibootcamp.brrgdx0.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Component did !");
    return connection;
  }
};

export default connectDB;
