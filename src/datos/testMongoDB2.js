import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://cualquiera:cualquiera@cluster0.sg1k4e6.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let result = [];

export async function connectToDatabase() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
      console.error("Error al conectar a MongoDB:", error);
    }
}


export async function queryCollection() {
  try {
    const collection = client.db("Ibec_React3").collection("products");
    result = await collection.find({}).toArray();
    console.log(result);
    } catch (error) {
        console.error("Error al consultar la colección:", error);
    }
}

export async function closeDatabase() {
  // Cerrar la conexión cuando sea necesario
  await client.close();
}

export {result };

//queryCollection();


