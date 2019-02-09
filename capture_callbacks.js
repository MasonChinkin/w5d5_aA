class Clock {
    constructor() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        this.printTime(hours, minutes, seconds);
        setInterval(() => {
            this._tick(date); 
            hours = date.getHours();
            minutes = date.getMinutes();
            seconds = date.getSeconds();
            this.printTime(hours, minutes, seconds);
        }, 1000);
    }

    printTime(hours, minutes, seconds) {
        console.log(`${hours}:${minutes}:${seconds}`);
    }
    
    _tick(date) {
        date.setSeconds(date.getSeconds() + 1); 
    }
}

let clock = new Clock();

