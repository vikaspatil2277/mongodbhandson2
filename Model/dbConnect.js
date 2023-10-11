const {MongoClient} = require("mongodb");

const url = "mongodb+srv://vikaspatil2277:vikas5577@cluster0.mwva03x.mongodb.net/?retryWrites=true&w=majority"
;

const Client = new MongoClient(url);

exports.insertOne = async(data) =>{

    try {
        const database = Client.db("Human_Resource");
        const collection = database.collection("employee");
        await Client.connect();
        console.log("connected");
        const dbRes = await collection.insertOne(data);
        Client.close();
        return dbRes;
    } catch (error) {
        console.log(error);
        return error.massage;
    }
        
}

exports.findInDB = async(query)=>{
    try {
        const database = Client.db("Human_Resource");
        const collection = database.collection("employee");
        await Client.connect();
        console.log("connected");
        const dbRes = await collection.find(query).toArray();
        Client.close();
        return dbRes;
    } catch (error) {
        console.log(error);
        return error.massage;
    }
} 

exports.updateInDB = async(condition,update)=>{
    try {
        const database = Client.db("Human_Resource");
        const collection = database.collection("employee");
        await Client.connect();
        console.log("connected");
        const dbRes = await collection.updateMany(condition,update);
        Client.close();
        return dbRes;
    } catch (error) {
        console.log(error);
        return error.massage;
    }
} 

exports.deleteInDB = async(condition)=>{
    try {
        const database = Client.db("Human_Resource");
        const collection = database.collection("employee");
        await Client.connect();
        console.log("connected");
        const dbRes = await collection.deleteMany(condition);
        Client.close();
        return dbRes;
    } catch (error) {
        console.log(error);
        return error.massage;
    }
} 