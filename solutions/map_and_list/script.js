// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const panel = document.querySelector('#draggable-panel');
    const header = document.querySelector('#panel-header');
    let yPosition = 0;
    let dragging = false;
    let lastY = null;

    const stickPositions = ['panel-sticky-bottom', 'panel-sticky-center', 'panel-sticky-top'];

    function snapPanel() {
        const currentTranslateY = Math.abs(parseFloat(getComputedStyle(panel).transform.split(',')[5]));
        const windowHeight = window.innerHeight;
        const thirdOfWindow = windowHeight / 3;
        console.log('windowHeight', windowHeight);
        console.log('currentTranslateY', currentTranslateY);
        console.log('thirdOfWindow', thirdOfWindow);

        if (currentTranslateY >= thirdOfWindow * 2) {

            panel.style.transform = `translateY(${windowHeight - 40}px)`;
        } else if (currentTranslateY >= thirdOfWindow && currentTranslateY < thirdOfWindow * 2) {
            panel.className = stickPositions[1]; // центр
            panel.style.transform = `translateY(${windowHeight / 2}px)`;
        } else {
            panel.className = stickPositions[2]; // сверху
            panel.style.transform = `translateY(0)`;
        }
    }

    function startDragging(e) {
        e.preventDefault();
        dragging = true;
        lastY = e.clientY || e.touches[0].clientY;
    }

    function stopDragging() {
        dragging = false;
        snapPanel(); // Теперь кнопка фиксации срабатывает после остановки движения мыши
    }

    function movePanel(e) {
        if (!dragging) return;
        const deltaY = (e.clientY || e.touches[0].clientY) - lastY;
        lastY = e.clientY || e.touches[0].clientY;
        yPosition += deltaY;
        panel.style.transform = `translateY(${Math.max(yPosition, -window.innerHeight)}px)`;
    }

    header.addEventListener('mousedown', startDragging);
    header.addEventListener('touchstart', startDragging);
    document.addEventListener('mousemove', movePanel);
    document.addEventListener('touchmove', movePanel);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchend', stopDragging);
});