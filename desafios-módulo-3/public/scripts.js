const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', function() {
        const pageId = card.getAttribute("id");
        window.location.href = `/courses/${pageId}`;

    });
}

document.querySelector('.maximize-modal').addEventListener('click', function() {
    const modalMaximize = modalOverlay.querySelector('.modal').classList.contains('maximize');

    if (modalMaximize) {
        modalOverlay.querySelector('.modal').classList.remove("maximize");
    } else {
        modalOverlay.querySelector('.modal').classList.add("maximize");
    }    
});

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";
});


