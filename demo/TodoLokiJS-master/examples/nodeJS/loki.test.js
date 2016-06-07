var loki = require('lokijs'),
    db = new loki('test.json'),
    db2 = new loki('test.json');
/*
var users = db.addCollection('users');
users.insert({
    name: 'joe'
});
users.insert({
    name: 'john'
});
users.insert({
    name: 'jack'
});
//console.log(users.data);
db.saveDatabase();
*/

db2.loadDatabase({}, function () {
    var users2 = db2.getCollection('users');
    console.log(users2.data);
});