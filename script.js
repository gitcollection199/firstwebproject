// Smooth scrolling for dropdown links
document.querySelectorAll('.dropdown-content a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Waste Slide Deck Data
const wasteSlides = {
    types_of_waste: [
        './images/wasteslidecover.JPG',
        './images/testingdogeim.JPG',

    ],
    how_to_find: [
        './images/wasteslidecover.JPG',
        './images/testingdogeim.JPG'
    ]
};

let wasteCurrentTopic = 'types_of_waste';
let wasteCurrentSlide = 0;

function wasteChangeTopic() {
    const select = document.getElementById('waste-topic-select');
    if (!select) return; // Exit if not on waste page
    wasteCurrentTopic = select.value;
    wasteCurrentSlide = 0;
    wasteUpdateSlide();
}

function wasteUpdateSlide() {
    const slideImage = document.getElementById('waste-slide-image');
    if (!slideImage) return; // Exit if not on waste page
    const pdfButton = document.querySelector('.waste-slidepdf-btn');
    
    slideImage.src = wasteSlides[wasteCurrentTopic][wasteCurrentSlide];
    slideImage.alt = `Slide ${wasteCurrentSlide + 1}`;
}

function wastePrevSlide() {
    if (wasteCurrentSlide > 0) {
        wasteCurrentSlide--;
        wasteUpdateSlide();
    }
}

function wasteNextSlide() {
    if (wasteCurrentSlide < wasteSlides[wasteCurrentTopic].length - 1) {
        wasteCurrentSlide++;
        wasteUpdateSlide();
    }
}

// Flashcard Slide Deck Data
const flashcardSlides = {
    first_amendment: [
        './images/bodyoflies.JPG', './wasteim/wasteimpicone.JPG'],
    second_amendment: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG'],
    d_e_i: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG'],
    voter_fraud: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG'],
    h_one_b_visa: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG'],
    law_fare: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG'],  
    de_banking: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG'],
    gender_ideology: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG'],
    j_six: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG'],
    invasion_im: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG'],
    co_vid: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG']       
};

let flashcardCurrentTopic = 'first_amendment';
let flashcardCurrentSlide = 0;

function flashcardChangeTopic() {
    const select = document.getElementById('flashcard-topic-select');
    if (!select) return; // Exit if not on flashcard page
    flashcardCurrentTopic = select.value || 'first_amendment';
    flashcardCurrentSlide = 0;
    console.log('flashcardChangeTopic triggered. Topic:', flashcardCurrentTopic);
    flashcardUpdateSlide();
}

function flashcardUpdateSlide() {
    const slideImage = document.getElementById('flashcard-slide-image');
    if (!slideImage) return; // Exit if not on flashcard page
    const pdfButton = document.querySelector('.flashcard-slidepdf-btn');

    if (flashcardSlides[flashcardCurrentTopic] && flashcardSlides[flashcardCurrentTopic].length > 0) {
        slideImage.src = flashcardSlides[flashcardCurrentTopic][flashcardCurrentSlide];
        slideImage.alt = `Flashcard Slide ${flashcardCurrentSlide + 1}`;
        console.log('Image src set to:', slideImage.src);
    } else {
        console.error('No slides for topic:', flashcardCurrentTopic);
        slideImage.src = './images/bodyoflies.jpg';
        slideImage.alt = 'No slides available';
    }
}

function flashcardPrevSlide() {
    if (flashcardCurrentSlide > 0) {
        flashcardCurrentSlide--;
        console.log('Previous slide:', flashcardCurrentSlide);
        flashcardUpdateSlide();
    }
}

function flashcardNextSlide() {
    if (flashcardCurrentSlide < flashcardSlides[flashcardCurrentTopic].length - 1) {
        flashcardCurrentSlide++;
        console.log('Next slide:', flashcardCurrentSlide);
        flashcardUpdateSlide();
    }
}

// Initialize based on page
if (document.getElementById('waste-slide-image')) {
    wasteUpdateSlide();
}

if (document.getElementById('flashcard-slide-image')) {
    flashcardUpdateSlide();
}