const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;

const app = express();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.541tyao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const collection_services = client
      .db("TutorNestServices")
      .collection("Services");
    const collection_boocked = client
      .db("TutorNestServices")
      .collection("Boocked");
    //   await client.connect();

    //services
    app.get("/services", async (req, res) => {
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      const result = await collection_services
        .find()
        .skip(page * size)
        .limit(size)
        .toArray();
      res.send(result);
    });

    app.get("/serviceCount", async (req, res) => {
      const count = await collection_services.estimatedDocumentCount();
      res.send({ count });
    });

    app.get("/search", async (req, res) => {
      const result = await collection_services
        .find({}, { _id: 1, services_name: 1 })
        .toArray();
      const simplifiedResult = result.map(({ _id, service_name }) => ({
        _id,
        service_name,
      }));
      res.send(simplifiedResult);
    });

    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await collection_services.findOne(query);
      res.send(result);
    });

    app.delete("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await collection_services.deleteOne(query);
      res.send(result);
    });

    app.put("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const service = req.body;
      const options = { upsert: true };

      const updatedservices = {
        $set: {
          service_image: service.service_image,
          service_name: service.service_name,
          service_price: service.service_price,
          service_area: service.service_area,
          service_type: service.service_type,
          description: service.description,
          user: {
            username: service.user.username,
            email: service.user.email,
            user_image: service.user.user_image,
            description: service.user.description,
          },
        },
      };

      const result = await collection_services.updateOne(
        query,
        updatedservices
      );
      res.send(result);
    });

    app.get("/service/:email", async (req, res) => {
      const email = req.params.email;
      console.log(req.cookies);
      const query = { "user.email": email };
      const result = await collection_services.find(query).toArray();
      res.send(result);
    });

    app.post("/services", async (req, res) => {
      const service = req.body;
      const result = await collection_services.insertOne(service);
      res.send(result);
    });

    app.get("/boock/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await collection_boocked.find(query).toArray();
      res.send(result);
    });

    app.get("/bock/:email", async (req, res) => {
      const email = req.params.email;
      const query = { providor_email: email };
      const result = await collection_boocked.find(query).toArray();
      res.send(result);
    });

    app.patch("/boock/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const status = req.body;
      const updateData = {
        $set: {
          statuts: status.statuts,
        },
      };
      const result = await collection_boocked.updateOne(query, updateData);
      res.send(result);
    });

    app.post("/boock", async (req, res) => {
      const service = req.body;
      const result = await collection_boocked.insertOne(service);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //   await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("d1 d2 d3");
});

app.listen(port, () => {
  console.log(`server Runnning on port ${port}`);
});
