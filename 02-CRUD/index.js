//  monogosh - command line interface to interact with MongoDB databases.

//  basic cmd:
//  show dbs -> list all db presnet in mongodb server

//  use myDB -> switch to db or create one if doesn't exists

//  db -> show current db

// db.createCollection("users") -> create collection 

// show collections -> list all collections in cureent db



//  CRUD operations in DB:

//  CREATE - Insert Document or add new document into collection

//  Insert One Document
//  db.users.insertOne({ name:"Swapnil" , age: 22, city:"Mumbai"})

//  Insert Many Document
//  db.users.insertMany([
// { name: "Bob", age: 30, city: "Mumbai" },
//   { name: "Charlie", age: 28, city: "Bangalore" }
// ])




//  READ - Find Document or query the db to retrieve document based on condition.

//  Find All Documents
//  db.users.find();

//  Find One Document
//  db.users.findOne({ name:"Swapnil" })

//  Find with Condition
//  Find users whose age is greater than 23
//  db.users.find({ age: { $gt:23 }}) 

// Find with Projection (show only specific fields)
// db.users.find({ age: { $gt:23 }}, { name:1,_id:0}) 




//  UPDATE - change or modify documents in collection.

//  Update One Document
// db.users.updateOne({
// name:"Swapnil", { $set: { age: 23,city:"Navi Mumbai"}}})

//  Increment a field
// db.users.updateOne({ name: "Bob" }, { $inc: { age: 1 } })


//  Update Many Document
// db.users.updateMany({city:"Mumbai},{ $set: { city:"Delhi"}})




//  Delete = remove documents from collection:

//  Delete One Document
//  db.users.deleteOne({ name:"Charlie" })

//  Delete Multiple Documents
//  db.users.deleteMany({ city:"Delhi"})

//  Delete All Documents
//  db.users.deleteMany({})
