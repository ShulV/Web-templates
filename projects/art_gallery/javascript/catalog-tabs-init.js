
document.querySelectorAll('.catalog-container__question-list-item-a').forEach((link) => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('.catalog-container__info').forEach((tabBlock) => {
            tabBlock.classList.remove('active');
        });
        const path = e.currentTarget.dataset.path;
        console.log(path)
        document.querySelector(`[data-target="${path}"]`).classList.add('active');
    })
});