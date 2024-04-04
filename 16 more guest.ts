//Question No: 16.More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.



let Guest_List: string [] = ['Talha sheikh' , 'Wasi khan', 'Adil Arfi'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

let absent_Guest: string = 'Talha Sheikh';

let New_Guest: string = 'Kamran Tessori';

Guest_List[0] = New_Guest;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

console.log(`Mr.  ${absent_Guest} is not coming to the party .`);

console.log('Good News! We find big Table so we are inviting three more guest. ');

Guest_List.unshift('Sir Zia Khan');

Guest_List.splice(2, 0, 'Hamza Khan');

Guest_List.push('Ahmad Arfi');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
}
