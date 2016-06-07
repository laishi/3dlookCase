// var db = new loki('blog.json');

// // Add a collection to the database
// var items = db.addCollection('items');

// // Add some documents to the collection
// items.insert({ name : 'mjolnir', owner: 'thor', maker: 'dwarves' });
// items.insert({ name : 'gungnir', owner: 'odin', maker: 'elves' });
// items.insert({ name : 'tyrfing', owner: 'Svafrlami', maker: 'dwarves' });
// items.insert({ name : 'draupnir', owner: 'odin', maker: 'elves' });

// items.insert({ name : 'laishi', sex: 'nan', age: '45' });
// items.insert({ name : 'ruhua', sex: 'nv', age: '32' });

// // Find and update an existing document
// var tyrfing = items.findOne({'name': 'tyrfing'});
// tyrfing.owner = 'arngrim';
// items.update(tyrfing);

// console.log(tyrfing)

// // Find and update an existing document
// var ruhua = items.findOne({'name': 'ruhua'});
// ruhua.owner = 'arngrim';
// items.update(ruhua);

// console.log(ruhua.name)




// // These statements send to Text Output
// // logText('tyrfing value :dwarves');
// logObject(tyrfing);
// logText('odins items');
// logObject(items.find({ 'owner': 'odin' }));

// // This statement sends to Inspector
// inspectObject(db);



// var db  = new loki('blog.json');
// var db2 = new loki('blog.json');

// var users = db.addCollection('users');
// users.insert({
//     name: 'joe'
// });
// users.insert({
//     name: 'john'
// });
// users.insert({
//     name: 'jack'
// });
// console.log(users.data);
// db.saveDatabase();

// db2.loadDatabase({}, function() {
//     var users2 = db2.getCollection('users')
//     console.log(users2.data);
// });


var db = new loki('blog.json');

console.log(db)