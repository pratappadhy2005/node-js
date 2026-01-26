const EventEmitter = require('events');

const myFirstEventEmitter = new EventEmitter();

//register event listener
myFirstEventEmitter.on('myFirstEvent', (arg1, arg2) => {
    console.log('myFirstEvent event raised with args: ', arg1, arg2);
});

myFirstEventEmitter.emit('myFirstEvent', 'arg1-value', 'arg2-value');

// Call custom event

const CustomListener = require('./custom-listener');

const customListener = new CustomListener();

//register event listener
customListener.onCustomEvent((arg1, arg2) => {
    console.log('customEvent event raised with args: ', arg1, arg2);
});

//raise custom event
customListener.raiseCustomEvent('arg1-value', 'arg2-value');
