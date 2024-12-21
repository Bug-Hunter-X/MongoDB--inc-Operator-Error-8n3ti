```javascript
// Incorrect usage of $inc operator
db.collection.updateOne({ name: "John" }, { $inc: { age: -1 } });
// Should be:
db.collection.updateOne({ name: "John" }, { $inc: { age: -1 } }, { upsert: true });
```