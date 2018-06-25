

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const note = require('./note.js');
const yargs = require('yargs');

const titleOptions = {
	describe: 'TITLE OF NOTE',
		demand: true,
		alias: 't'
};

const bodyOptions = {
		describe: 'BODY OF NOTE',
		demand: true,
		alias: 'b'
	};
const argv = yargs
.command('add', 'ADD A NEW NOTE', {
	title: titleOptions,
 	 body: bodyOptions
})
.command('list', 'LIST ALL NOTES')
.command('read', 'Read a note', {
	title: titleOptions
})
.command('remove', 'REMOVE A NOTE', {
	title: titleOptions
})
.help().argv;

var command = process.argv[2];

// process.argv to grab the information that u put at terminal and do something with it
// if u put argv[2] it means node app.js run, here node - argv[0], app.js- argv[1], run-argv[2]



if(command === 'add') {
	var n = note.addNote(argv.title, argv.body);
	if(n){
		console.log('NOTE CREATED');
		note.logNote(n);
	} else{
		console.log('TITLE IS ALREADY TAKEN');
	}
}else if (command === 'list') {
	var nt = note.getAll();
	console.log('PRINTING ' + nt.length + ' NOTES');
	nt.forEach((n) => note.logNote(n));
}else if (command === 'read'){
	var n = note.getNote(argv.title);
if(n){
		console.log('NOTE FOUND');
		note.logNote(n);
	} else{
		console.log('not found ');
	}


}else if (command === 'remove'){
	var noteremoved = note.removeNote(argv.title);
	var message = noteremoved ? 'NOTE WAS REMOVED' : 'NOTE NOT FOUND';
	console.log(message);
}
else{
	console.log('COMMAND NOT RECOGNIZED');
}

//console.log(_.isString(true));
//console.log(_.isString('jay'));

//var filteredarray = _.uniq([1,2,4,2,5,4,5,3,5,3]);
//console.log(filteredarray);
//console.log(process.argv);
//var user = os.userInfo();

//fs.appendFile('hey.txt', 'hello' + user.username + '!' + 'u r ' + note.age + 'old', function(err){if(err) console.log('unable to write  the file')});
