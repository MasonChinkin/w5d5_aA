class Clock {
    constructor() {
        let date = new Date();

        // attributes or properties 
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        // date.setSeconds(date.getSeconds() + 1); 
        this.seconds += 1;
        this.printTime();
    }
}

let clock = new Clock;

// new invokes the constructor 

