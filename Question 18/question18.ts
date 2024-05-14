// Making a Array of countries are print its Original order
let countriesToVisit: string[] = ["China", "Denmark", "Brasil", "Argentina"];

console.log("Original Order:", countriesToVisit);

// Print the array in Alphabatical order without modifying the actual list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the array is still in its Original Order
console.log("Still in Original Order:", countriesToVisit);

// Print the array in reverse order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show this the array is still in its Original Order
console.log("Still in Original Order:", countriesToVisit);

// We have changed the Original Array Order now
console.log("Original Array Reversed:", countriesToVisit.reverse());

// Print the array to show that it's back to its Original Order
console.log("Back to Original Order:", countriesToVisit.reverse());

// Print the array to show that its order has been changed in Alphabetical Order now
console.log("sorted in Alphabetical Order:", countriesToVisit.sort());

// We have changed the again Original Array Order now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());