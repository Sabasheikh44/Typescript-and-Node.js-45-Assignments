// Question Number: 18.

// Store the location in an array
let placesToVisit: string[] = ["Dubai","Pakistan", "America", "China", "Japan"];

// Print te array in its original order
console.log("Original order:",placesToVisit);

// Print your array in alphabetical order without modifying the actual list
console.log("Alphabetical order:",[...placesToVisit].sort());

// Show that your array is still in its original order by printing it
console.log("Original order after sorting:",placesToVisit);

// out cPrint your array in reverse alphabetical order withhanging he order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that your array is still in its original order by printing it again
console.log("Original order after reverse sorting:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again to get back to the original order 
console.log("Back to original order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order 
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);