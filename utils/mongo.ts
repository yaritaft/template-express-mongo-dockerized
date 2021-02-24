import { Posts } from "../models/posts";
import { MongoClient, Collection } from 'mongodb';

const uri = 
"mongodb://example:example@localhost:27017/api?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const dbDefaultName = 'api'

export function getClient(): MongoClient {
  const uri =
    //   "mongodb+srv://sample-hostname:27017/?poolSize=20&writeConcern=majority"; EXAMPLE
    // "mongodb://example:example@localhost:27017/api?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";
    "mongodb://example:example@localhost:27017/api";
  // Create a new MongoClient
  const client = new MongoClient(uri);
  return client;
  // Connect the client to the server
  // await client.connect();
  // Establish and verify connection
  // const db = await client.db("api");
  // const coll = await db.collection("posts");
  // return coll;
  // console.log(await coll.find({}).toArray())
  // console.log("Connected successfully to server");
  // Ensures that the client will close when you finish/error
}

export async function getCollection(client: MongoClient, collectionName: string): Promise<Collection>{
    await client.connect()
    const coll = client.db('api').collection(collectionName);
    return coll;
    
}

export async function getCollection2(collectionName: string, connectionString: string = uri, dbName : string = dbDefaultName): Promise<Collection>{
    const client = new MongoClient(connectionString);
    await client.connect()
    const coll = client.db(dbName).collection(collectionName);
    return coll;

}