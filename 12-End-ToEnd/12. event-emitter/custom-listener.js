const EventEmitter = require('events');

class CustomListener extends EventEmitter {
    constructor() {
        super();
        this.customEventName = 'customEvent';
    }
    raiseCustomEvent(arg1, arg2) {
        this.emit(this.customEventName, arg1, arg2);
    }
    //register event listener
    onCustomEvent(callback) {
        this.on(this.customEventName, callback);
    }
}

//export CustomListener class
module.exports = CustomListener;