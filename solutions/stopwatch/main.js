// инициализация view секундомера нулевым значением

class StopwatchView {
    constructor() {
        this.clock = document.getElementById('stopwatch__clock');
        this.timeTextDiv = document.getElementById('stopwatch__time-text');
        this.startBtn = document.getElementById('stopwatch__btn-start');
        this.stopBtn = document.getElementById('stopwatch__btn-stop');
        this.resetBtn = document.getElementById('stopwatch__btn-reset');
    }

    // отобразить цифровое время секундомера
    displayDigitalTime(timeText) {
        console.log('display' + timeText)
        this.timeTextDiv.textContent = timeText; 
    }

    // назначить кнопке start listener
    bindStart(handler) {
        this.startBtn.addEventListener('click', event => {
            handler();
        })
    }

    // назначить кнопке stop listener
    bindStop(handler) {
        this.stopBtn.addEventListener('click', event => {
            handler();
        })
    }

    // назначить кнопке reset listener
    bindReset(handler) {
        this.resetBtn.addEventListener('click', event => {
            handler();
        })
    }
}

// --------------------------------------------------------------------------------------------------------------

class StopwatchModel {
    constructor() {
        this._curStopwatchTimeMs = new Date(0, 0, 0, 0); //текущее время секундомера (в мс)
        this._isStarted = false; //флаг запуска секундомера
        this._timer = null; //таймер
        this._tickTimeMs = 100; //интервал (в мс)
    }

    // запустить секундомер
    start() {
        this._isStarted = true;
        this._timer = setInterval(() => {
            //console.log('this._tickTimeMs.getMilliseconds() = ' + this._curStopwatchTimeMs.getMilliseconds())
            this._curStopwatchTimeMs.setMilliseconds(this._curStopwatchTimeMs.getMilliseconds() + this._tickTimeMs);
            this.onTimeTextChanged(this.formatCurrentStopwatchTime);
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
            //this.onTimeTextChanged(this.formatCurrentStopwatchTime);
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

    // назначить обратный вызов для изменения текстового времени
    bindTimeTextChanged(callback) {
        this.onTimeTextChanged = callback;
    }

}

// --------------------------------------------------------------------------------------------------------------

class StopwatchController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        this.onTimeTextChanged(this.model.formatCurrentStopwatchTime);

        this.model.bindTimeTextChanged(this.onTimeTextChanged);

        this.view.bindStart(this.handleStart);
        this.view.bindStop(this.handleStop);
        this.view.bindReset(this.handleReset);

        
    }

    // событие изменения текстовых часов
    onTimeTextChanged = (timeText) => {
        this.view.displayDigitalTime(timeText);
    }

    // обработчик запуска
    handleStart = () => {
        this.model.start();
    }

    // обработчик остановки
    handleStop = () => {
        this.model.stop();
    }

    //обработчик сброса
    handleReset = () => {
        this.model.reset();
    }
}

// --------------------------------------------------------------------------------------------------------------

let app = new StopwatchController(new StopwatchView(), new StopwatchModel());
