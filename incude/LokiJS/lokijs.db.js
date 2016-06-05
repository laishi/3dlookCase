// db         = new loki('test.json'),
// db2        = new loki('test.json');

// var users  = db.addCollection('users');
// users.insert({
//     name: 'joe'
// });
// users.insert({
//     name: 'john'
// });
// users.insert({
//     name: 'jack'
// });

// users.insert({
//     name: 'laishi'
// });

// users.insert({
//     name: 'ruhua'
// });

// users.insert({
//     name: 'lxy'
// });



// var laishi = users.find( {'name':'ruhua'} );

// db.saveDatabase();
// console.log(users.data);
// console.log(laishi.Object);

// db2.loadDatabase({}, function() {
// var users2 = db2.getCollection('users')
//     console.log(users2.data);
// });






// This database has already been created for you.
// var db = new loki('sandbox');

// Add a collection to the database

db        = new loki('items.json');

var items = db.addCollection('items');

// Add some documents to the collection
items.insert({ name : 'mjolnir', owner: 'thor', maker: 'dwarves' });
items.insert({ name : 'gungnir', owner: 'odin', maker: 'elves' });
items.insert({ name : 'tyrfing', owner: 'Svafrlami', maker: 'dwarves' });
items.insert({ name : 'draupnir', owner: 'odin', maker: 'elves' });

items.insert({ name : 'laishi', owner: 'yes it is', age: '45' });

// Find and update an existing document
var tyrfing = items.findOne({'age': '45'});
tyrfing.owner = 'arngrim';
items.update(tyrfing);

console.log(tyrfing);
db.saveDatabase();

// These statements send to Text Output
// logText('tyrfing value :');
// logObject(tyrfing);
// logText('odins items');
// logObject(items.find({ 'owner': 'odin' }));

// // This statement sends to Inspector
// inspectObject(db);