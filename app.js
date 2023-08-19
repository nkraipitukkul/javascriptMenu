"use strict";
let breakfast = document.getElementById('breakfast');
let all = document.getElementById('all');
let lunch = document.getElementById('lunch');
let shake = document.getElementById('shake');
let dinner = document.getElementById('dinner');
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let firstElement = document.getElementById('firstElement');
let secondElement = document.getElementById('secondElement');
let thirdElement = document.getElementById('thirdElement');
let fourthElement = document.getElementById('fourthElement');
let firstImg = document.getElementById('firstImg');
let secondImg = document.getElementById('secondImg');
let thirdImg = document.getElementById('thirdImg');
let fourthImg = document.getElementById('fourthImg');
let fifthImg = document.getElementById('fifthImg');
let sixthImg = document.getElementById('sixthImg');
let seventhImg = document.getElementById('seventhImg');
let eigthImg = document.getElementById('eigthImg');
let name1 = document.getElementById('name1');
let descOne = document.getElementById('descOne');
let name2 = document.getElementById('name2');
let descTwo = document.getElementById('descTwo');
let name3 = document.getElementById('name3');
let descThree = document.getElementById('descThree');
let name4 = document.getElementById('name4');
let descFour = document.getElementById('descFour');
let name5 = document.getElementById('name5');
let descFive = document.getElementById('descFive');
let name6 = document.getElementById('name6');
let descSix = document.getElementById('descSix');
let name7 = document.getElementById('name7');
let descSeven = document.getElementById('descSeven');
let name8 = document.getElementById('name8');
let descEight = document.getElementById('descEight');
const firstOriginalStyle = first ? first.style.display : '';
const secondOriginalStyle = second ? second.style.display : '';
const thirdOriginalStyle = third ? third.style.display : '';
const fourthOriginalStyle = fourth ? fourth.style.display : '';
const firstElementOriginalStyle = firstElement ? firstElement.style.display : '';
const secondElementOriginalStyle = secondElement ? secondElement.style.display : '';
const thirdElementOriginalStyle = thirdElement ? thirdElement.style.display : '';
const fourthElementOriginalStyle = fourthElement ? fourthElement.style.display : '';
// Store similar original styles for other elements you've hidden
function allChange() {
    // Restore the original styles of all elements
    if (first) {
        first.style.display = firstOriginalStyle;
    }
    if (second) {
        second.style.display = secondOriginalStyle;
    }
    if (third) {
        third.style.display = thirdOriginalStyle;
    }
    if (fourth) {
        fourth.style.display = fourthOriginalStyle;
    }
    if (fourthElement) {
        fourthElement.style.display = fourthElementOriginalStyle;
    }
    if (secondElement) {
        secondElement.style.display = secondElementOriginalStyle;
    }
    if (firstImg) {
        firstImg.innerHTML = '<img src="1.jpg">';
    }
    if (secondImg) {
        secondImg.innerHTML = '<img src="2.jpg">';
    }
    if (thirdImg) {
        thirdImg.innerHTML = '<img src="3.jpg">';
    }
    if (name1) {
        name1.innerHTML = ' <p>Buttermilk Pancake  <span class="styled-span">$15.99</span></p>';
    }
    if (name2) {
        name2.innerHTML = ' <p>Diner Double  <span class="styled-span">$13.99</span></p>';
    }
    if (descTwo) {
        descTwo.innerHTML = '<p>vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats</p>';
    }
    if (descOne) {
        descOne.innerHTML = "<p> I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed</p>";
    }
    if (name3) {
        name3.innerHTML = ' <p>Godzilla Milkshake   <span class="styled-span">$6.99</p>';
    }
    if (descThree) {
        descThree.innerHTML = "<p>ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.</p>";
    }
    // Restore similar styles for other elements you've hidden
}
function breakfastChange() {
    if (third) {
        third.style.display = "none";
    }
    if (fourth) {
        fourth.style.display = "none";
    }
    if (fourthElement) {
        fourthElement.style.display = "none";
    }
    if (secondElement) {
        secondElement.style.display = secondElementOriginalStyle;
    }
    if (second) {
        second.style.display = secondOriginalStyle;
    }
    if (firstImg) {
        firstImg.innerHTML = '<img src="1.jpg">';
    }
    if (secondImg) {
        secondImg.innerHTML = '<img src="4.jpg">';
    }
    if (thirdImg) {
        thirdImg.innerHTML = '<img src="5.jpg">';
    }
    if (name1) {
        name1.innerHTML = ' <p>Buttermilk Pancake  <span class="styled-span">$15.99</span></p>';
    }
    if (descOne) {
        descOne.innerHTML = "<p> I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed</p>";
    }
    if (name2) {
        name2.innerHTML = ' <p>Country Delight  <span class="styled-span">$20.99</span></p>';
    }
    if (descTwo) {
        descTwo.innerHTML = '<p>Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,</p>';
    }
    if (name3) {
        name3.innerHTML = ' <p>Egg Attack <span class="styled-span">$22.99</span></p>';
    }
    if (descThree) {
        descThree.innerHTML = "<p>franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up</p>";
    }
}
function lunchChange() {
    if (third) {
        third.style.display = "none";
    }
    if (fourth) {
        fourth.style.display = "none";
    }
    if (fourthElement) {
        fourthElement.style.display = "none";
    }
    if (secondElement) {
        secondElement.style.display = secondElementOriginalStyle;
    }
    if (thirdElement) {
        thirdElement.style.display = thirdElementOriginalStyle;
    }
    if (second) {
        second.style.display = secondOriginalStyle;
    }
    if (firstImg) {
        firstImg.innerHTML = '<img src="2.jpg">';
    }
    if (secondImg) {
        secondImg.innerHTML = '<img src="5.jpg">';
    }
    if (thirdImg) {
        thirdImg.innerHTML = '<img src="8.jpg">';
    }
    if (name1) {
        name1.innerHTML = ' <p>Diner Double  <span class="styled-span">$13.99</span></p>';
    }
    if (descOne) {
        descOne.innerHTML = "<p> vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats</p>";
    }
    if (name2) {
        name2.innerHTML = ' <p>Egg Attack <span class="styled-span">$22.99</span></p>';
    }
    if (descTwo) {
        descTwo.innerHTML = "<p>franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up</p>";
    }
    if (name3) {
        name3.innerHTML = '<p>American Classic  <span class="styled-span">$12.99</span></p>';
    }
    if (descThree) {
        descThree.innerHTML = '<p>on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut</p>';
    }
}
function shakeChange() {
    if (third) {
        third.style.display = "none";
    }
    if (fourth) {
        fourth.style.display = "none";
    }
    if (fourthElement) {
        fourthElement.style.display = "none";
    }
    if (secondElement) {
        secondElement.style.display = secondElementOriginalStyle;
    }
    if (thirdElement) {
        thirdElement.style.display = thirdElementOriginalStyle;
    }
    if (second) {
        second.style.display = secondOriginalStyle;
    }
    if (firstImg) {
        firstImg.innerHTML = '<img src="3.jpg">';
    }
    if (secondImg) {
        secondImg.innerHTML = '<img src="6.jpg">';
    }
    if (thirdImg) {
        thirdImg.innerHTML = '<img src="5.jpg">';
    }
    if (name1) {
        name1.innerHTML = '<p>Godzilla Milkshake   <span class="styled-span">$6.99</p>';
    }
    if (descOne) {
        descOne.innerHTML = '<p>ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.</p>';
    }
    if (name2) {
        name2.innerHTML = ' <p>Oreo Dream  <span class="styled-span">$0.99</span></p>';
    }
    if (descTwo) {
        descTwo.innerHTML = "<p> Portland chicharrones ethical edison bulb,palo santo craft beer chia heirloom iPhone everyday</p>";
    }
    if (name3) {
        name3.innerHTML = ' <p>Egg Attack <span class="styled-span">$22.99</span></p>';
    }
    if (descThree) {
        descThree.innerHTML = "<p>franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up</p>";
    }
}
function dinnerChange() {
    if (third) {
        third.style.display = "none";
    }
    if (fourth) {
        fourth.style.display = "none";
    }
    if (second) {
        second.style.display = "none";
    }
    if (secondElement) {
        secondElement.style.display = "none";
    }
    if (firstImg) {
        firstImg.innerHTML = '<img src="8.jpg">';
    }
    if (name1) {
        name1.innerHTML = '<p>American Classic  <span class="styled-span">$12.99</span></p>';
    }
    if (descOne) {
        descOne.innerHTML = '<p>on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut</p>';
    }
}
