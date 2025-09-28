// What is MONGODB ?

// - MongoDb is NoSQL, document-oriented database that stores data in JSON-like documents(BSON) instead of traditional tables and rows.BSON
// - It doesn't have strict schemas and each document in collection can have diff sturture
// - eg. {
//      "name":"Swapnil",
//      "age":22, 
//      "skills":["Node.js","MongoDB"]
//   }

// - Unlike SQL database, that stores data in rows and tables, MongoDB uses collection and documents.

//  Benefit -> Flexible schemas -> no need to define tables and columns before inserting data. Great for evolving app.
//          -> Handles large volume of unstructured / semi structured data efficiently
//          -> Can store nested arrays and objects and query

//  Database -> container of collections (e. e commerce)
//  Collection -> container of documents (eg . user) -> same like Table in SQL
//  Documents ->  JSON-like records -> similar to rows in SQL
// (eg. {
//   "name": "John",
//   "email": "john@example.com"
// });


//  SQL VS NoSQL database

//  SQL -> stores data in table that have rows and column, fixed schema and supports joins, vertical scaling and strong ACID support, best for structured data, complex query like finance app
//  No-SQL => stores data in JSON like document that has key , value pair , schema-less and avoid joins. horizontal scaling and use in flexible, growing large apps like socila media


//  Relational db vs nn-relational db
// A Relational Database stores data in tables with rows and columns where relationships are maintained via primary keys and foreign keys.

// A Non-Relational Database stores data in documents, key-value pairs, graphs, or wide-column formats.

// Vertical vs Horixontal Scaling
// Vertical scaling means increasing the capacity of a single server by adding more CPU, RAM, or storage. The database or application runs on a bigger, more powerful machine.
// Upgrading a server from 16GB → 64GB RAM or from 4 CPUs → 16 CPUs.

// Horizontal scaling means adding more servers/nodes to distribute the load and data. The application or database runs across multiple machines.
// Adding 4 new servers to a MongoDB cluster with sharding.

