// Creating a Array
var userNames = ["Mehroz", "Asharib", "Talha", "Admin", "Wajahat"];
// Using ForEach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, " would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(oneUser, " thank you for login again."));
    }
});
