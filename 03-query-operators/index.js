//  query operators:

// comparison :

// $gt (greater than)
// $lt (less than)
// $gte (greater than or equal to)
// $lte (less than or equal to)
// $eq (equal to)
// $ne (not equal to)



//  logical :

// $and - return doc that matches all cond
//  db.users.find({ $and: [{ age:25}, { city:"Delhi"}]});

// $or - Returns documents that match at least one condition.
// db.users.find({ $or: [ { city: "Delhi" }, { city: "Mumbai" } ] })

// $not - Negates the query.
// db.users.find({ age: { $not: { $gt: 30 } } })

// $nor - Returns documents that fail all conditions.
// db.users.find({ $nor: [ { city: "Delhi" }, { city: "Mumbai" } ] })



// membership :

// $in - return doc that matches value from given list
// db.users.find({ city: { $in: ["Delhi","Mumbai"]}})

// $nin - Opposite of $in, excludes values from a list.
// db.users.find({ city: { $nin: ["Delhi", "Mumbai"] } })




//  $set - used in update operations to add new field or update the value of existing field in doc
// db.users.updateOne(
//   { name: "Alice" },
//   { $set: { age: 26, city: "Noida" } }
// )

//  $unset - removes a field
//  $inc / $dec - inc or dec a numeric val
//  $push - add an item to an array
//  $pull - remove an item from an array
//  $addToSet - push only if not exists