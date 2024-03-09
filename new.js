"use strict";
let name_1 = "yousuf";
let name_2 = "shyousuf";
let name_3 = "shaikhyousuf";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
let age_1 = 15;
let age_2 = 18;
if (age_1 == 15) {
    console.log("are not eligible for vote");
}
if (age_2 == 18) {
    console.log("are eligible for vote");
}
if (age_1 <= age_2) {
    console.log("younger");
}
if (age_2 >= age_1) {
    console.log("older");
}
if (age_1 == 15 && age_2 == 18) {
    console.log("are eligible for vote");
}
if (age_1 == 15 || age_2 != 18) {
    console.log("are not eligible for vote");
}
let animal = ["tiger", "elephant", "rabbit", "fox"];
if (animal.includes("fox")) {
    console.log("fox is in animal list.");
}
if (!animal.includes("lion")) {
    console.log("lion is not in animal list.");
}
