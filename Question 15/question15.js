var guestList1 = ["Shahzaib", "Shahroz", "Saad", "Sameer"];
var dontCome = guestList1[0];
console.log(dontCome, "Nahi a sakta");
guestList1.splice(0, 1, "Junaid");
guestList1.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
