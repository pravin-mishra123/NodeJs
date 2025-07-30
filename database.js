const {MongoClient} = require("mongodb")



// connect through local URL if installed in the machine
// const url = 'mongodb://localhost:20323';

// connect to given connection string url on the browser
const url = "mongodb+srv://pravinmishra3344:xgTMFASDPPBcFQM6@namastenode.cushngx.mongodb.net/"

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main(){
    // use connect method to connect to the server
    await client.connect();
    console.log("Connected Successfully to the server");
    const db = client.db(dbName);
    const collection = db.collection('User');

    // Insert the data

    const data = {
        firstName:"Deepika",
        lastName:"Padukon",
        city:"Mumbai",
        phoneNumber:"9837923889"
    }

    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);

    // Find All Documents
    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);

    // count the documents
    // const countResult = await collection.countDocuments({}) // empty object is working as filter
    // console.log("Count Documents", countResult)

    // Find all the documents with a filter of firstname: "Deepika"
    const result = await collection.find({firstName:"Deepika"}).toArray()
    console.log(result)

    return 'done.';
}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());







// NOTES:
// Goto MongoDB website
// Create free M0 cluster
// Create a User -> wahtever wish too
// Get the connection string
// Search MongoDB Compass and click to download and install it
// 