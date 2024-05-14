let userNames = ["Mehroz", "Asharib", "Talha", "Admin", "Saad"];

// Remove all values from our Array Now our array is empty
userNames = []

// If statments for checking lenght of our array is empty ?
if (userNames.length === 0) {
    console.log("Your Array in Empty we need to find some users!");
}
else {
    // Using ForEach Loop on Array

userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser} would you like to see a status report`);
    }
    else {
        console.log(`Hello ${oneUser} thank you for login again.`)
    }
})
}