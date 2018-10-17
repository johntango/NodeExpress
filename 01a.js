var collection = require('./collection').collection;
console.log('Local');

collection.add( {'name':'fred','email':'fred.mit.edu'}  );
console.log(JSON.stringify(collection.users));