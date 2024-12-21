```javascript
// Correct usage of $inc operator with upsert option
db.collection.updateOne({ name: "John" }, { $inc: { age: -1 } }, { upsert: true });
```