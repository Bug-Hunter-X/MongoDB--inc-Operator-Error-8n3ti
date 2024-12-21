# MongoDB $inc Operator Error
This repository demonstrates an uncommon error related to the usage of the `$inc` operator in MongoDB update operations. Incorrect usage can lead to unexpected behavior or errors, especially when dealing with documents that might not exist.

## Bug Description
The `$inc` operator, when used without the `upsert` option, will fail to update a document if the document does not exist. This behavior is not always intuitive and can be a source of unexpected errors. 

## Solution
The correct approach is to use the `upsert` option with the `$inc` operator. This ensures that if the document does not exist, it will be created before the increment operation is applied.  See `bugSolution.js` for a corrected version.
