// JavaScript code to trigger the animation when scrolling over the card section
// alert("Welcome to INTERN");
// // Function to check if an element is in the viewport
// function isInViewport(element) {
//     var rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Function to handle scroll event
// function handleScroll() {
//     var cardsContainer = document.querySelector('.card-container');
    
//     // Check if the cards container is in the viewport
//     if (isInViewport(cardsContainer)) {
//         var cards = document.querySelectorAll('.card');
        
//         // Add animation class to each card
//         cards.forEach(function(card, index) {
//             if (index % 2 === 0) {
//                 card.classList.add('slideInFromLeft');
//             } else {
//                 card.classList.add('slideInFromRight');
//             }
//         });
        
//         // Remove the scroll event listener once the animation is triggered
//         window.removeEventListener('scroll', handleScroll);
//     }
// }

// // Add scroll event listener to trigger animation
// window.addEventListener('scroll', handleScroll);

// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    var cardsContainer = document.querySelector('.card-container');
    
    // Check if the cards container is in the viewport
    if (isInViewport(cardsContainer)) {
        var cards = document.querySelectorAll('.card');
        
        // Add animation class to each card
        cards.forEach(function(card, index) {
            if (index % 2 === 0) {
                card.classList.add('slideInFromLeft');
            } else {
                card.classList.add('slideInFromRight');
            }
        });
        
        // Remove the scroll event listener once the animation is triggered
        window.removeEventListener('scroll', handleScroll);
    }
}

// Add scroll event listener to trigger animation
window.addEventListener('scroll', handleScroll);
