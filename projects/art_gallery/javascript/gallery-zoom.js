const slides = document.querySelectorAll('.gallery-container__slide');
const modalOverlay = document.querySelector('.gallery-modals__modal-overlay');
const modals = document.querySelectorAll('.gallery-modals__modal');
const body = document.querySelector('body');

slides.forEach((slide) => {
	slide.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((modal) => {
			modal.classList.remove('gallery-modals__modal_visible');
		});

		let visibleModal = document.querySelector(`[data-target="${path}"]`);
        visibleModal.classList.add('gallery-modals__modal_visible');
		modalOverlay.classList.add('gallery-modals__modal-overlay_visible');
		body.classList.add('no-scroll-y');
	});
    
});

modalOverlay.addEventListener('click', (e) => {
	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('gallery-modals__modal-overlay_visible');
		body.classList.remove('no-scroll-y');
		modals.forEach((modal) => {
			modal.classList.remove('gallery-modals__modal_visible');
		});
	}
});

modals.forEach((modal) => {
    let closeBtn = modal.querySelector('.gallery-modals__modal-close-btn');
    closeBtn.addEventListener('click', (e) => {
		body.classList.remove('no-scroll-y');
        modalOverlay.classList.remove('gallery-modals__modal-overlay_visible');
		modals.forEach((_modal) => {
			_modal.classList.remove('gallery-modals__modal_visible');
		});
    });
})
