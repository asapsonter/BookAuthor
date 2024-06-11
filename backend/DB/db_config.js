
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const mongoose = require('mongoose');
uri = process.env.db_key;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

  const mongoKey = process.env.db_key;


const connectToDatabase = async () => {
    try{
        await mongoose.connect(mongoKey);
        console.log('Connected to DB!');
    } catch(error){
        console.log("unable to connect to DB");
        process.exit(1); // Exit with an error code if connection fails
    }
};

module.exports = connectToDatabase;