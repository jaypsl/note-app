var square = (x)=> x*x;
console.log(square(7));
console.log(square(8));
console.log(square(10));
console.log(square(2));


const os = require('os');


var user = {

	name: 'jake',
	sayHi: () => {
		console.log('hi ${this.name}');
	},
	sayHiAlt(){
		console.log('hi ${this.name}')
	}
};

user.sayHiAlt();
