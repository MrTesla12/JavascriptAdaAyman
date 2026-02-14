"use strict";



/*  Phrase Arrays*/

const part1 = [
    "The dragon",
    "My teacher",
    "A pirate",
    "The robot",
    "A cat",
    "A Cyborg",
    "A Wizard",
    "A Hobbit",
    "An Elf",
    "The Fellowship"
];

const part2 = [
    "quickly",
    "quietly",
    "angrily",
    "happily",
    "suddenly",
    "gently",
    "clumsily",
    "bravely",
    "politely",
    "loudly"
];

const part3 = [
    "ate",
    "found",
    "stole",
    "kicked",
    "built",
    "fixed",
    "lost",
    "spilled",
    "borrowed",
    "opened"
];

const part4 = [
    "a sandwich",
    "my homework",
    "a spaceship",
    "the treasure",
    "a strange device",
    "a wand",
    "the elixir of immortality",
    "a sword",
    "an axe",
    "the meaning of life"
];

const part5 = [
    "before school.",
    "during lunch.",
    "on the moon.",
    "in the classroom.",
    "at midnight.",
    "before anyone noticed",
    "next to mount doom",
    "under my bed",
    "by total accident",
    "and nobody believed it"
];

/* Selection Index State  */

let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;

/* Get Page Elements */

const part1Value = document.getElementById("part1Value");
const part2Value = document.getElementById("part2Value");
const part3Value = document.getElementById("part3Value");
const part4Value = document.getElementById("part4Value");
const part5Value = document.getElementById("part5Value");

const part1Btn = document.getElementById("part1Btn");
const part2Btn = document.getElementById("part2Btn");
const part3Btn = document.getElementById("part3Btn");
const part4Btn = document.getElementById("part4Btn");
const part5Btn = document.getElementById("part5Btn");

const tellStoryBtn = document.getElementById("tellStoryBtn");
const randomBtn = document.getElementById("randomBtn");
const resetBtn = document.getElementById("resetBtn");

const storyOutput = document.getElementById("storyOutput");

/*  Helper Functions */

/* Moves to next index and loops back to start */
function nextIndex(current, length) {
    return (current + 1) % length;
}

/* Returns a random index between 0 and length-1 */
function randomIndex(length) {
    return Math.floor(Math.random() * length);
}

/*Render Functions  */

function renderPart1() {
    part1Value.textContent = part1[i1];
}

function renderPart2() {
    part2Value.textContent = part2[i2];
}

function renderPart3() {
    part3Value.textContent = part3[i3];
}

function renderPart4() {
    part4Value.textContent = part4[i4];
}

function renderPart5() {
    part5Value.textContent = part5[i5];
}

function renderAllParts() {
    renderPart1();
    renderPart2();
    renderPart3();
    renderPart4();
    renderPart5();
}

/*  Story Building  */

function buildStorySentence() {
    const sentence = part1[i1] + " " +
        part2[i2] + " " +
        part3[i3] + " " +
        part4[i4] + " " +
        part5[i5];

    return sentence;
}

function showStory() {
    storyOutput.textContent = buildStorySentence();
}

/*  Extra Features  */

function randomizeStory() {
    i1 = randomIndex(part1.length);
    i2 = randomIndex(part2.length);
    i3 = randomIndex(part3.length);
    i4 = randomIndex(part4.length);
    i5 = randomIndex(part5.length);

    renderAllParts();
    showStory();
}

function resetStory() {
    i1 = 0;
    i2 = 0;
    i3 = 0;
    i4 = 0;
    i5 = 0;

    renderAllParts();
    storyOutput.textContent = "Choose parts above, then click “Tell Story”.";
}

/*  Event Listeners  */

part1Btn.addEventListener("click", function () {
    i1 = nextIndex(i1, part1.length);
    renderPart1();
});

part2Btn.addEventListener("click", function () {
    i2 = nextIndex(i2, part2.length);
    renderPart2();
});

part3Btn.addEventListener("click", function () {
    i3 = nextIndex(i3, part3.length);
    renderPart3();
});

part4Btn.addEventListener("click", function () {
    i4 = nextIndex(i4, part4.length);
    renderPart4();
});

part5Btn.addEventListener("click", function () {
    i5 = nextIndex(i5, part5.length);
    renderPart5();
});

tellStoryBtn.addEventListener("click", function () {
    showStory();
});

randomBtn.addEventListener("click", function () {
    randomizeStory();
});

resetBtn.addEventListener("click", function () {
    resetStory();
});

/*  Initial Display  */

renderAllParts();