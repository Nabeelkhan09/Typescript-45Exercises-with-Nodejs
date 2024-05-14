var personName2 = "Nabeel Hanif";
console.log(personName2.toLowerCase());
console.log(personName2.toUpperCase());
console.log(personName2.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
