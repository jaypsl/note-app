//var obj = {
//	name: 'jay'
//};

//var stringObj = JSON.stringify(obj); 
// .stringify convert obj into a string
//console.log(typeof stringObj);
//console.log(stringObj);

//var personstring = '{"name": "jay", "age": 24}';
//var person = JSON.parse(personstring);
// .parse convert data(personstring) into object 
//console.log(typeof person);
//console.log(person);

const fs = require('fs');

var originalNote = {
	title: 'some title',
	body: 'some body'
};

//originalNoteString

fs.writeFileSync('notes.json', originalNoteString = JSON.stringify(originalNote));

var noteString = fs.readFileSync('notes.json');
v = JSON.parse(noteString);
console.log(typeof v);
console.log(v.title);