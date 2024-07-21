document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "url('images/pic-1.jpg')",
        "url('images/pic-2.jpg')",
        "url('images/pic-3.jpg')",
        "url('images/pic-4.jpg')"
    ];

    const cards = document.querySelectorAll('.card');

    // Shuffle the images array
    images.sort(() => Math.random() - 0.5);

    // Assign shuffled images to the cards
    cards.forEach((card, index) => {
        card.style.backgroundImage = images[index];
    });
});
