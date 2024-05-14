// Creating a Array
let userNames = ["Mehroz", "Asharib", "Talha", "Admin", "Wajahat"];

// Using ForEach Loop on Array

userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser} would you like to see a status report`);
    }
    else {
        console.log(`Hello ${oneUser} thank you for login again.`)
    }
})