// инициализация view секундомера нулевым значением

class StopwatchView {
    constructor() {
        this.clock = document.getElementById('stopwatch__clock');
        this.timeTextDiv = document.getElementById('stopwatch__time-text');
        this.startBtn = document.getElementById('stopwatch__btn');
    }
}

// --------------------------------------------------------------------------------------------------------------

class StopwatchModel {
    constructor() {
        this._curStopwatchTimeMs = new Date(0, 0, 0, 0); //текущее время секундомера (в мс)
        this._isStarted = false; //флаг запуска секундомера
        this._timer = null; //таймер
        this._tickTimeMs = 10; //интервал (в мс)
    }

    // запустить секундомер
    start() {
        this._isStarted = true;
        this._timer = setInterval(() => {
            //console.log('this._tickTimeMs.getMilliseconds() = ' + this._curStopwatchTimeMs.getMilliseconds())
            this._curStopwatchTimeMs.setMilliseconds(this._curStopwatchTimeMs.getMilliseconds() + this._tickTimeMs)
        }, this._tickTimeMs)
    }

    // остановить секундомер
    stop() {
        this._isStarted = false;
        clearInterval(this._timer);
    }

    // сбросить секундомер
    reset() {
        if (!this.getState) {
            this._curStopwatchTimeMs = 0;
        }
    }

    // проверить состояние: true - секундомер работает, false - ожидает
    getState() {
        if (this._isStarted) {
            return true;
        }
        return false;
    }

    // получить текущее время секундомера
    get currentStopwatchTime() {
        return this._curStopwatchTimeMs;
    }

    // получить текущее время секундомера в формате ч:м:с:мс
    get formatCurrentStopwatchTime() {
        let date = this._curStopwatchTimeMs;
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`
    }

}

// --------------------------------------------------------------------------------------------------------------

class StopwatchController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

}

// --------------------------------------------------------------------------------------------------------------

let app = new StopwatchController(new StopwatchView(), new StopwatchModel());
