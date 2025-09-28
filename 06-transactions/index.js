// A transaction in MongoDB allows multiple operations on multiple documents or collections to be executed atomically — either all succeed or all fail.

// Use 
// - Transfer money between bank accounts (debit + credit must both succeed).
// - Update multiple collections that depend on each other.

// Think of a bank teller transferring money:
// Alice’s account is debited
// Bob’s account is credited
// If either step fails, the teller cancels the operation → money stays consistent

// Ensures ACID properties:
// Atomicity - A transaction is all-or-nothing. Either all operations succeed, or none do.
// eg. MongoDB Example: In a bank transfer, if debiting Alice succeeds but crediting Bob fails, the whole transaction is rolled back.

//  Consistency - The database moves from one valid state to another valid state, obeying all rules and constraints.
//  eg. After a transaction, total account balances remain correct, no negative money appears if not allowed.

// Isolation - Transactions don’t interfere with each other; intermediate states are invisible to other operations until committed.
// eg. two concurrent transfers cannot see partial updates of each other.

// Durability - Once a transaction is committed, the changes are permanent, even if the system crashes.
// eg. After committing a bank transfer, balances remain correct even if MongoDB server crashes immediately afterward.



//  Replication vs Sharding:

// Replication: it means copying data across multipl server to provide high availabilty
// uses Replica Sets: a group of primary and secondary nodes.
//  If your primary node crashes, one secondary automatically becomes primary, ensuring the database is always available.

// Sharding - it is horizontal scaling that is splitting collection across multiple server to handle large dataset
// We use Shard Key to distribute documents across shards (a db instance holding part of data)

