// Aggregation is used to process data records and return computed results
// Similar to SQL's: GROUP BY,SUM,COUNT,AVG queries
// It works with aggregation pipeline, where each stage transform the doc and passes result to next stage to get final result

// It can be used to:
// Group values from multiple documents together.
// Perform operations on the grouped data to return a single result.

// Aggregation Pipeline:
// It consists of multiple stage that process documents
// Each stage performs an operation on doc like filter doc,group doc,etc

// Just like a fruit goes through multiple stages to create juice from it: wash -> peel -> cut -> grind 

// Aggregation Pipeline Stages:
// $match → Filters documents (like find)
// $group → Groups documents and computes aggregates ($sum, $avg
// $project → Reshapes documents, includes/excludes fields.
// $sort → Sorts the documents.
// $limit / $skip → Limits or skips results.
// $lookup → Joins collections (like SQL JOIN).
// $unwind → Deconstructs arrays to separate documents.

// Imagine Sales collection:
// eg. db.sales.insertMany([
//   { product: "Laptop", price: 1000, quantity: 2, region: "North" },
//   { product: "Phone", price: 500, quantity: 5, region: "North" },
//   { product: "Laptop", price: 1000, quantity: 1, region: "South" }
// ]);

// Aggregation: Total sales per product
//  db.sales.aggregate([ 
//   { $group: {_id:"product", totalSales:{ sum:{$multiply:["$price","$quantity"]} }}}
//  ])

//  Output:
// [
//   { "_id": "Laptop", "totalSales": 3000 },
//   { "_id": "Phone", "totalSales": 2500 }
// ]

// Additional Example: Average Price by Region
// db.sales.aggregate([
//     { $group:{ _id: "$region", avgPrice: { $avg:"region"}}},
//     {sort: {avgPrice: -1}}
// ])


// Find total amount spent by each customer for completed orders.
db.orders.aggregate([
 { $match: { status:"completed"}},
    { $group : { _id:"$customer", totalAmount:{ $sum:"$amount"}}},
    { $sort:{ totalAmount : -1}}
])

db.orders.aggregate([
    { $group : { _id:"$customer", totalAmount:{ $sum:"$amount"}}},
    { $sort:{ totalAmount : -1}}
])

// Embedded vs Referenc
// Embedded : store related data in same document
//  Adv: faster to read, fewer queries
//  Dis:doc can grow too large , harder to updte nested docs

// eg. users and orders in same doc
// db.users.insertOne({
//   _id: 1,
//   name: "Alice",
//   orders: [
//     { orderId: 101, item: "Laptop", amount: 1000 },
//     { orderId: 102, item: "Mouse", amount: 50 }
//   ]
// })


// Reference: store realted data in diff collecrion and link them using _id
//  Adv: smaller doc , easier updates , no data duplication
//  Dis: requires joins($lookup) for fetching related data

// db.users.insertOne({ _id: 1, name: "Alice" })
// db.orders.insertMany([
//   { orderId: 101, userId: 1, item: "Laptop", amount: 1000 },
//   { orderId: 102, userId: 1, item: "Mouse", amount: 50 }
// ])

// db.orders.find({ userId: 1 }) get all order for alice
//   { $match: { _id: 1 } },
//   { $lookup: {
//       from: "orders",
//       localField: "_id",
//       foreignField: "userId",
//       as: "orders"
//   }}
// ])
