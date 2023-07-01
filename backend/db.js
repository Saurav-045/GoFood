const mongoose=  require('mongoose');
// const mongoURI = 'mongodb+srv://gofood:saurav123@cluster0.1zvb5hr.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoURI = 'mongodb://gofood:saurav123@ac-ne7nlkm-shard-00-00.1zvb5hr.mongodb.net:27017,ac-ne7nlkm-shard-00-01.1zvb5hr.mongodb.net:27017,ac-ne7nlkm-shard-00-02.1zvb5hr.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-4tttat-shard-0&authSource=admin&retryWrites=true&w=majority';
// Connecting  mongoDB database await and async both are necessary 
//mongoDB is schema and mongoose is schema-less so we use mongoose for validation of data
const mongoDB = async() =>{
        try{
            await mongoose.connect(mongoURI, {useUnifiedTopology: true, useNewUrlParser: true});
            console.log("connected");
            const fetched_data= await mongoose.connection.collection("food_items");
            const data = await fetched_data.find({}).toArray();
            global.food_items= data;
            const foodCategory = await mongoose.connection.collection("foodCategory");
            const catData = await foodCategory.find({}).toArray();
            global.foodCategory = catData;
            
            //empty curle braces bcz we need all datas not particular one
            
        } catch (error)
        {
            console.log("error found; ",error);
        }
    };  


module.exports = mongoDB;

