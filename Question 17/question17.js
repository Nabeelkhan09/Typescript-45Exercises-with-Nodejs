// Creating a Guest List Array
var guestList = ["Shahzaib", "Shahroz", "Saad", "Sameer"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "Nahi a Sakta");
// Add or remove values from guest list array
guestList.splice(0, 1, "Junaid");
// Message print for bigger table
console.log("Good News ! we have Found a Bigger Table For Dinner.");
// Adding a new guest at starting index of array
guestList.unshift("Ali");
// Adding a new guest at ending index of array
guestList.push("laraib");
// Get a middle index of our guest List array
var middleIndex1 = Math.floor(guestList.length / 2);
// Adding a new guest at middle index of array
guestList.splice(middleIndex1, 0, "Shayan");
// Print message of updated list
console.log("Updated list of uor guests");
// Sending a invitation message to our guests one by one with thier name
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");
// Using while loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending a invitation to the last two guests on the list
console.log("Invitations to the last 2 guests");
guestList.forEach(function (lasttwo) { return console.log("Lucky ".concat(lasttwo, ", you are still invited to dinner")); });
// removing last two guests from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
