// Interface to store data about our home hardware
interface motherboard{
    name:string;
    RAMSlotType:string;
    noOfSlots:number;
    slotLimitInGigabytes:number;
};

//Interface to store data about our RAM
interface RAM{
    name:string;
    RAMSlotType:string;
    sizeInGigabytes:number;
};

//array to hold motherboard values:
let motherboardDatabase:motherboard[] = [];

function addToMotherboardDatabase(name:string, RAMSlotType:string, noOfSlots:number, slotLimitInGigabytes:number){
    let motherboard:motherboard = {
        name:name,
        RAMSlotType:RAMSlotType,
        noOfSlots:noOfSlots,
        slotLimitInGigabytes:slotLimitInGigabytes
    }
    motherboardDatabase.push(motherboard);
};

// DUMMY MOTHERBOARDS FOR TEST:
addToMotherboardDatabase("MSI","DDR4",2,32);
addToMotherboardDatabase("Asus","DDR3",4,16);
addToMotherboardDatabase("Acer","DDR2",2,64);

//function to get details:
function getMotherboardDetails(){
    let motherboardName:string|null = prompt(`what is the name of the board you have?`);
    return motherboardName;
};

function getRAMDetails(){
    let RAMName:string|null = prompt(`what slot type RAM disk are you planning to buy?`);
    return RAMName;
}

function searchThroughArrayWithKeyword(keyword:string|null, array:any[]){
    for(let i=0;i<array.length;i++){
        if(array[i].name === keyword){
            return array[i];
        }
        else{
            return null;
        }
    };
}

//actual compatibility check:
function compatibilityCheck(){
    let a:string|null = getMotherboardDetails();
    let b:string|null = getRAMDetails();
    let ourMotherBoard:motherboard = searchThroughArrayWithKeyword(a, motherboardDatabase);
    if(ourMotherBoard.RAMSlotType === b){
        console.log(`Go on and buy it. It'll work!`);
    }else{
        console.log(`That ain't gonna work!`);
    }
}

console.log(`Hello! Choose what help you're looking for today:
1. Check Hardware compatibility for your motherboard and any RAM disks:`);
let userInput: string | null = prompt(`Enter your selection:`);
if(userInput == '1'){
    compatibilityCheck();
}else{
    console.log(`OOPS! We arent here yet! We'll build this feature soon. Pinky Promise.`);
}