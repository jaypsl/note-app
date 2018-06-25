

const fs = require('fs');
//module.exports.age = 25;


var fetchNotes = () =>{
try{
    var notesString = fs.readFileSync('notes-data.json');
	return JSON.parse(notesString);
}catch(e) {
return [];
}};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title,body) => {
	var notes = fetchNotes();
	var note = {
title,
body
	};



var duplicateNotes = notes.filter((note) => note.title === title);
if(duplicateNotes.length === 0){
notes.push(note);
saveNotes(notes);
return note; 	
};
	};
	

var getAll = () => {
return fetchNotes();
};

var logNote = (n) => {
	console.log('__');
    console.log('TITLE:' + n.title);
    console.log('BODY:' + n.body);
};

var getNote = (title) => {
var notes = fetchNotes();
var filteredNotes = notes.filter((note) => note.title !== title);
return filteredNotes[0];
saveNotes(filteredNotes);

return notes.length !== filteredNotes.length;

};

var removeNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);
	
	return notes.length !== filteredNotes.length;
};



module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
}