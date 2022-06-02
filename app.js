 const mongoose = require('mongoose')
//import mongoose from 'mongoose';



mongoose.connect("mongodb://127.0.0.1:27017/BehzadDb", { useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please Check your Data entery No Name Specified"], 
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        
    },
    review: String,
})


const Fruit = mongoose.model("Fruit",fruitSchema);


const fruit = new Fruit({
    name: "",
    rating: 1,
    review: "Pretty solid as a fruit."
})

 //fruit.save();


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


// Fruit.insertMany([kiwi,orange,banana],function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Succesfully saved all the fruit to fruitsDB");
//     }

// })

Fruit.find(function(err,fruits){
    if (err) {
        console.log(err);
    }else {
        console.log(fruits);
    }
    mongoose.connection.close();

    fruits.forEach(function(fruit){
        console.log(fruit.name);
    })
})


///find and update based on id 
Fruit.updateOne({_id:""}, {name: "Peach"}, function(error){
    if(error){
        console.log(err);
    }else {
        console.log("Successfully updated the document")
    }
})


// Fruit.deleteOne({name: "Peach"},function(error){
//     if (error) {
//         console.log(error);
//     }else{
//         console.log("Successfuly deleted the document");
//     }
// });


Person.deleteMany({name: "John"},function(error){
    if (error) {
        console.log(error);
    }else{
        console.log("Successfully deleted all the document");
    }
})

