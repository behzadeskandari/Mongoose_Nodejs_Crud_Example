 const mongoose = require('mongoose')
//import mongoose from 'mongoose';



mongoose.connect("mongodb://127.0.0.1:27017/BehzadDb", { useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
})


const Fruit = mongoose.model("Fruit",fruitSchema);


const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
})

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

const Person = mongoose.model("Person",personSchema);
const person = new Person({
    name: "Behzad",
    age: 35
})

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The Best Fruit"
})

const orange = new Fruit({
    name: "Orange",
    score: 4,
    review: "Too Sour For Me"
})

const banana = new Fruit({
    name: "Banana",
    score: 3,
    review: "Weired texture"
})


Fruit.insertMany([kiwi,orange,banana],function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Succesfully saved all the fruit to fruitsDB");
    }

})

// Fruit.





