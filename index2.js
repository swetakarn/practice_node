var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler:
var myEventHandler = function () {

	console.log('Welcome to GeeksforGeeks');
}

// Assign the event handler to an event:
eventEmitter.on('geeks', myEventHandler);

// Fire the 'geeks' event:
eventEmitter.emit('geeks');
console.log('Hello this is the console-based application');

console.log('This all will be printed in console');

// The above two lines will be printed in the console.
