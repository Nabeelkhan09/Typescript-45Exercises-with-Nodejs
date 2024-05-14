// Creating a Guest List Array
var guestList2 = ["Shahzaib", "Shahroz", "Saad", "Sameer"];
// Making variable for those guest who cant come
var dontCome1 = guestList2[0];
// Print the name of guest who cant come
console.log(dontCome1, "Nahi a sakta");
// Add or remove values from guesst list array
guestList2.splice(0, 1, "Junaid");
// Message print for bigger table
console.log("Good news ! we have Found a Bigger Table For Dinner.");
// Adding a new guest at starting index of array
guestList2.unshift("Ali");
// Adding a new guest at ending index of Array
guestList2.push("Laraib");
// Get a middle index of our guest array
var middleIndex = Math.floor(guestList2.length / 2);
// Adding a new guest to middle index of array
guestList2.splice(middleIndex, 0, "Adnan");
// Print Message of updated List
console.log("Updated List of our guests");
// Sending a invitation message to our guests one by one with thier names
guestList2.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to  dinner with me")); });
