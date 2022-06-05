// инициализация view секундомера нулевым значением

class StopwatchView {
    constructor() {
        this.clock = document.getElementById('stopwatch__clock');
        this.msClockArrow = document.getElementById('stopwatch__clock-msecond-arrow');
        this.secondClockArrow = document.getElementById('stopwatch__clock-second-arrow');
        this.timeTextDiv = document.getElementById('stopwatch__time-text');
        this.startBtn = document.getElementById('stopwatch__btn-start');
        this.stopBtn = document.getElementById('stopwatch__btn-stop');
        this.resetBtn = document.getElementById('stopwatch__btn-reset');
        
    }

    // отобразить цифровое время секундомера
    displayDigitalTime(timeText) {
        this.timeTextDiv.textContent = timeText; 
    }

    // отобразить стрелку (мс) часов: angle - угол в градусах (int)
    displayMsClockArrow(angle) {
        this.msClockArrow.style.transform = `rotate(${angle}deg)`
    }

    // отобразить стрелку (c) часов: angle - угол в градусах (int)
    displaySecondClockArrow(angle) {
        this.secondClockArrow.style.transform = `rotate(${angle}deg)`
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
        if (!this.getState()) {
            this._isStarted = true;
            this._timer = setInterval(() => {
            this._curStopwatchTimeMs.setMilliseconds(this._curStopwatchTimeMs.getMilliseconds() + this._tickTimeMs);
            this.onTimeTextChanged(this.formatCurrentStopwatchTime);
            this.onMsArrowPositionChanged(this.calculateMsArrowAngle());
            this.onSecondArrowPositionChanged(this.calculateSecondArrowAngle());
        }, this._tickTimeMs);
        }
    }

    // остановить секундомер
    stop() {
        if (this.getState()) {
            this._isStarted = false;
            clearInterval(this._timer);
        }
    }

    // сбросить секундомер
    reset() {
        if (!this.getState()) {
            this._curStopwatchTimeMs.setHours(0, 0, 0, 0);
            //console.log('this.formatCurrentStopwatchTime ' + this.formatCurrentStopwatchTime)
            this.onTimeTextChanged(this.formatCurrentStopwatchTime);
            this.onMsArrowPositionChanged(this.calculateMsArrowAngle());
            this.onSecondArrowPositionChanged(this.calculateSecondArrowAngle());
        }
    }

    calculateMsArrowAngle() {
        return Math.round(
            (
                (
                    this._curStopwatchTimeMs.getHours() * 3600000 +
                    this._curStopwatchTimeMs.getMinutes() * 60000 +
                    this._curStopwatchTimeMs.getSeconds() * 1000 +
                    this._curStopwatchTimeMs.getMilliseconds()
                ) / 1000
            ) * 360);
    }

    calculateSecondArrowAngle() {
        return Math.round(
            (
                (
                    this._curStopwatchTimeMs.getHours() * 3600 +
                    this._curStopwatchTimeMs.getMinutes() * 60 +
                    this._curStopwatchTimeMs.getSeconds()
                ) / 60
            ) * 360);
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

    // назначить обратный вызов для изменения стрелки (мс) часов
    bindMsArrowPositionChanged(callback) {
        this.onMsArrowPositionChanged = callback;
    }

    // назначить обратный вызов для изменения стрелки (с) часов
    bindSecondArrowPositionChanged(callback) {
        this.onSecondArrowPositionChanged = callback;
    }

}

// --------------------------------------------------------------------------------------------------------------

class StopwatchController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        this.onTimeTextChanged(this.model.formatCurrentStopwatchTime);

        this.model.bindTimeTextChanged(this.onTimeTextChanged);
        this.model.bindMsArrowPositionChanged(this.onMsArrowPositionChanged);
        this.model.bindSecondArrowPositionChanged(this.onSecondArrowPositionChanged);

        this.view.bindStart(this.handleStart);
        this.view.bindStop(this.handleStop);
        this.view.bindReset(this.handleReset);

        
    }

    // событие изменения текстовых часов
    onTimeTextChanged = (timeText) => {
        this.view.displayDigitalTime(timeText);
    }

    // событие изменения положения стрелки (мс) часов
    onMsArrowPositionChanged = (angle) => {
        this.view.displayMsClockArrow(angle);
    }

    // событие изменения положения стрелки (с) часов
    onSecondArrowPositionChanged = (angle) => {
        this.view.displaySecondClockArrow(angle);
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
