# revType

> Convert Javascript data structures into their typed counterparts.

### Input:

```javascript
import revtype from 'revtype';

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
```

### Output:

```json
{
	"stuff": {},
	"things": [],
	"nil": "null",
	"name": "string",
	"male": "boolean",
	"age": "number",
	"mom": {
		"name": "string",
		"male": "boolean",
		"age": "number",
		"jobs": [
			"string",
			"string",
			"string",
			{
        "title": "string",
        "location": "string",
        "salary": "number"
      }
		]
	}
}

```

### Todo:
- Support for Map
- Support for WeakMap
- Support for Set
- Support for homeless people.
