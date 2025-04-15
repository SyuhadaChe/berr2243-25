const {MongoClient}= require('mongodb');

const drivers = [
    {
        name: "John Doe",
        vehicleType: "Sedan",
        isAvailable: true,
        rating: 4.8
    },
    {
        name: "Alice Smith",
        vehicleType: "SUV",
        isAvailable: false,
        rating: 4.5
    }
    };

//show the data in the console
console.log(drivers);

//TODO: show the all the drivers name in the console

//TODO: add dditional driver to the drivers array

async function main() {
            
    //Replace <connection-string> with your MongoDB URI
    const uri = "mongodb://localhost:27017/"
    const client = new MongoClient(uri);

    try
    {
        await client.connect();
        console.log("Connected to MongoDb!");

        const db = client.db("testDB");
        const collection = db.collection("users");

        //Insert a document
        await collection.insertOne({name: "SyuhadaChe", age: 22 });
        console.log("Document Inserted!");

        //Query the document
        const result = await collection.findOne({ name: "SyuhadaChe"});
        console.log("Query Result:", result);

    }
    catch (err)
    {
        console.error("Error: ", err);

    }
    finally
    {
        await client.close();
    }
}


main();
