function sandwich(...items: string[]): void{
    console.log("Sandwich order:")

    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("Enjoy you sandwich Areeba Wasi")

sandwich('capsicum','tomato','chicken')
sandwich('beaf','chheze')
sandwich('garlic chicken','mayo sauce')