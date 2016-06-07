/**
 * Created by liyl on 2015/8/18.
 */
var loki =  require('lokijs');
var db = new loki('person.json');
var children = db.addCollection('children');
children.insert({name : 'liyl' , age : 18});
console.log(children.get(1));
