const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const personSchema = new mongoose.Schema({
    name:String,
    age:Number 
})

const Fruit = mongoose.model("Fruit",fruitSchema);

const Person = mongoose.model("Person",personSchema);

const apple = new Fruit ({
    name:"Apple",
    rating : 7,
    review: "Pretty good"
});
const banana = new Fruit ({
    name:"banana",
    rating : 17,
    review: "Pretty good"
});
const kiwi = new Fruit ({
    name:"kiwi",
    rating : 37,
    review: "asdasd good"
});



const getFruits = async () => {
    try {
        
       
        const fruits = await Fruit.find();
        mongoose.connection.close();
        fruits.forEach((fruit)=>{
            console.log(fruit.name);
        });

        
    } catch (err) {
        console.error(err);
    }
}

getFruits()

