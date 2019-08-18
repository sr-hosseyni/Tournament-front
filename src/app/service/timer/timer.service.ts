import {Injectable} from '@angular/core';

@Injectable()
export class TimerService {

    startTime: number;
    elapsed: number;
    total: number;

    timeoutOveral: number;
    timeoutStartTime: number;
    timeoutElapsed: number;

    private timer: any;

    constructor(total: number) {
        this.total = total;
        this.elapsed = 0;
        this.timeoutOveral = 0;
        this.timeoutElapsed = 0;
    }

    tick(that: TimerService) {
        that.elapsed = Math.floor((new Date()).getTime() / 1000) - that.startTime - that.timeoutOveral;
    }

    timeoutTick(that: TimerService) {
        that.timeoutElapsed = Math.floor((new Date()).getTime() / 1000) - that.timeoutStartTime;
    }

    start() {
        this.startTime = Math.floor((new Date()).getTime() / 1000);
        // Update the count down every 1 second
        this.timer = setInterval(this.tick, 1000, this);
    }

    pause() {
        clearInterval(this.timer);
        this.timeoutStartTime = Math.floor((new Date()).getTime() / 1000);
        // Update the count down every 1 second
        this.timer = setInterval(this.timeoutTick, 1000, this);
    }

    stop() {
        clearInterval(this.timer);
    }

    resume() {
        clearInterval(this.timer);
        console.log(this.timeoutElapsed);
        this.timeoutOveral += this.timeoutElapsed;
        // Update the count down every 1 second
        this.timer = setInterval(this.tick, 1000, this);
        this.tick(this);
    }

    getFormattedElapsedTime(format: string = '') {
        switch (format) {
            default: return ((this.elapsed - this.elapsed % 60) / 60) + ':' + (this.elapsed % 60);
        }
    }

    getFormattedElapsedTimeout(format: string = '') {
        switch (format) {
            default: return ((this.timeoutElapsed - this.timeoutElapsed % 60) / 60) + ':' + (this.timeoutElapsed % 60);
        }
    }

    getElapsedTime() {
        return this.elapsed;
    }

    getElapsedPercentage() {
        return this.elapsed / this.total * 100;
    }
}
