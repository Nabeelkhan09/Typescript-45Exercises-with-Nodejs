// Creating a Guest List Array

let guestList = ["Shahzaib", "Shahroz", "Saad", "Sameer"];

// Making variable for those guest who cant come
let dontCome = guestList [0];

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
let middleIndex1: number = Math.floor(guestList.length / 2);

// Adding a new guest at middle index of array
guestList.splice(middleIndex1, 0, "Shayan");

// Print message of updated list
console.log("Updated list of uor guests");

// Sending a invitation message to our guests one by one with thier name
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));

// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");

// Using while loop to remove guests from the array until only two names remain
while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest} I cant invite you to dinner`);
}
// Sending a invitation to the last two guests on the list
console.log("Invitations to the last 2 guests");
guestList.forEach(lasttwo => console.log(`Lucky ${lasttwo}, you are still invited to dinner`));

// removing last two guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);