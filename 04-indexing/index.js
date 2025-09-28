//  Indexes are special data stucture in MongoDB that support efficient execution of queries
//  Without an index, MongoDB must scan every document in a collection to return query results.
//  With an index, MongoDB can quickly locate documents by limiting the number of documents scanned.

//  eg.
//  A human resource department that often need to look up employees by their employeeId
//  You can create an index on the employeeID field to improve query performance

// db.employees.createIndex({ employeeId: 1 });

// This ensures fast lookup on employeeId, avoid full scan

// Analogy:
// Just like index at book let u find a topic quickly without reading every page, Indexes let u find doc w/o scanning every collection.



// Types: 
// 1) Single Field Index:
// - an index created on single field of doc
// - can be asc(1) or desc(-1)
// - default _id index is single field index

//  eg. db.users.createIndex({ name:  1});

//  To check it use .explain("executionStatus")
//  eg. db.users.find({ name:  "Alice"}).explain("executionStatus")

//  "stage":"IXSCAN."  Index Scan not Collection scan

// 2) Compound Index:
// - index created on multiple fields in doc
// - order of field matters

// db.users.createIndex({age:1,city:-1})

// 3) Multikey index:
// - index fields that store array values
// db.products.insertOne({ name: "Laptop", tags: ["electronics", "computers", "tech"] })
// db.products.createIndex({ tags: 1 })

// 4) Hashed Index:
// - Index on the hashed value of a field.
// - mainly used for sharding to distribute data evenly

//  db.users.createIndex({ userId: "hashed" })

// 5) Geospatial Index:
// - Index used for location-based queries.


// Collection Scan (COLLSCAN) - MongoDB checks every document in the collection to find matching results.
// Happens when no suitable index exists for the query.

// Index Scan (IXSCAN) - MongoDB uses an index structure (like a lookup table) to quickly locate matching documents.
// Much faster than collection scan

// Limitations:
// While indexes improve query performance, they add overhead on write operations (insert, update, delete) because each write must also update the indexes.
// Hence too many index can reduce performance
