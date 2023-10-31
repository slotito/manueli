
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


async function queryCollection() {
  try {
    // Acceder a la colección "miColeccion" en la base de datos
    const collection = client.db("Ibec_React3").collection("products3");

    // Realizar una consulta en la colección
    //const query = { campo: "valor" }; // Define tu consulta aquí
    //const result = await collection.find(query).toArray();

    const result = await collection.find({}).toArray();

    // Imprimir los documentos encontrados
    console.log("Documentos en la colección 'miColeccion':");
    console.log(result);
  } catch (error) {
    console.error("Error al consultar la colección:", error);
  }
}

queryCollection();
