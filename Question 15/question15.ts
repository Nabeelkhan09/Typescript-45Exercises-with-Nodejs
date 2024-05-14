let guestList1 = ["Shahzaib", "Shahroz", "Saad", "Sameer"];

let dontCome = guestList1[0];

console.log(dontCome, "Nahi a sakta");

guestList1.splice(0, 1, "Junaid");

guestList1.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));