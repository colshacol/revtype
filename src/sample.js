import revtype from './';

const object = {
  stuff: {},
  things: [],
  nil: null,
	name: 'tommy',
	male: false,
	age: 29,
	mom: {
		name: 'mommy',
		male: false,
		age: 28,
		jobs: [
			'cooking',
			'cleaning',
			'beasting',
			{
				title: 'boss',
				location: 'home',
				salary: 0
			}
		]
	}
};

const revved = revtype.parse(object);
console.log(JSON.stringify(revved));
