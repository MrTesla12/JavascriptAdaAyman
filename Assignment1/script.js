"use strict";



/*  Phrase Arrays*/

const part1 = [
    "The dragon",
    "My teacher",
    "A pirate",
    "The robot",
    "A cat"
];

const part2 = [
    "quickly",
    "quietly",
    "angrily",
    "happily",
    "suddenly"
];

const part3 = [
    "ate",
    "found",
    "stole",
    "kicked",
    "built"
];

const part4 = [
    "a sandwich",
    "my homework",
    "a spaceship",
    "the treasure",
    "a strange device"
];

const part5 = [
    "before school.",
    "during lunch.",
    "on the moon.",
    "in the classroom.",
    "at midnight."
];

/* Selection Index State */

let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;

/* Get Page Elements  */

const part1Value = document.getElementById("part1Value");
const part2Value = document.getElementById("part2Value");
const part3Value = document.getElementById("part3Value");
const part4Value = document.getElementById("part4Value");
const part5Value = document.getElementById("part5Value");

const storyOutput = document.getElementById("storyOutput");
