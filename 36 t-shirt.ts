// Qustion No: 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

import { text } from "stream/consumers";

function makeShirt(size: string, text: string): void {
    console.log(`\nyou order a size a ${size}${text}`)
}

makeShirt('large', '" i love typescript "')
makeShirt('medium', '" i need a big shirt "')