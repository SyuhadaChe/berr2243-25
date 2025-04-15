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

    try {
        await client.connect();
        const db = client.db("testDB");

        const driversCollection = db.colection("drivers");

        drivers.forEach(async (driver) => {
            const result = await driversCollection.insertOne(driver);
            console.log('New driver created with results: ${result}');
        });

    } finally {
        await client.close();
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

drivers.forEach(driver => {
    console.log(driver.name);
});

drivers.push({
    name: "Mike Johnson",
    licenseNumber: "EF789012",
    rating: 4.9,
    available: true
});
