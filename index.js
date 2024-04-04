"use strict";
;
;
//array to hold motherboard values:
let motherboardDatabase = [];
function addToMotherboardDatabase(name, RAMSlotType, noOfSlots, slotLimitInGigabytes) {
    let motherboard = {
        name: name,
        RAMSlotType: RAMSlotType,
        noOfSlots: noOfSlots,
        slotLimitInGigabytes: slotLimitInGigabytes
    };
    motherboardDatabase.push(motherboard);
}
;
// DUMMY MOTHERBOARDS FOR TEST:
addToMotherboardDatabase("MSI", "DDR4", 2, 32);
addToMotherboardDatabase("Asus", "DDR3", 4, 16);
addToMotherboardDatabase("Acer", "DDR2", 2, 64);
//function to get details:
function getMotherboardDetails() {
    let motherboardName = prompt(`what is the name of the board you have?`);
    return motherboardName;
}
;
function getRAMDetails() {
    let RAMName = prompt(`what slot type RAM disk are you planning to buy?`);
    return RAMName;
}
function searchThroughArrayWithKeyword(keyword, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === keyword) {
            return array[i];
        }
        else {
            return null;
        }
    }
    ;
}
//actual compatibility check:
function compatibilityCheck() {
    let a = getMotherboardDetails();
    let b = getRAMDetails();
    let ourMotherBoard = searchThroughArrayWithKeyword(a, motherboardDatabase);
    if (ourMotherBoard.RAMSlotType === b) {
        console.log(`Go on and buy it. It'll work!`);
    }
    else {
        console.log(`That ain't gonna work!`);
    }
}
console.log(`Hello! Choose what help you're looking for today:
1. Check Hardware compatibility for your motherboard and any RAM disks:`);
let userInput = prompt(`Enter your selection:`);
if (userInput == '1') {
    compatibilityCheck();
}
else {
    console.log(`OOPS! We arent here yet! We'll build this feature soon. Pinky Promise.`);
}
