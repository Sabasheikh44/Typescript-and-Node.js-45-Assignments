//Question No: 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// import { gunzipSync } from "zlib";

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.


// let Guest_List: string [] = ['Talha sheikh' , 'Wasi khan', 'Adil Arfi'];

// for(let i=0; i<Guest_List.length; i++){

// //     console.log('Dear Mr ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
// // }
// }

// let absent_Guest: string = 'Talha Sheikh';

// let new_Guest: string = 'Kamran Tessori';

// Guest_List[0] = new_Guest;

// // for(let i=0; i<Guest_List.length; i++){

// //     console.log('Dear Mr ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
// // }

// console.log(`Mr. ${absent_Guest} is not coming to the party. `);
// console.log(`Good News! We find big Table so we are inviting more 3 guests. `);

// Guest_List.unshift('Sir Zia Khan');
// Guest_List.splice(2 , 0 , 'Maryam Nawaz');
// Guest_List.push('Bilawal BHutto Zardari');

// for(let i=0; i<Guest_List.length; i++){

//         console.log('Dear Mr ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
//     }

// console.log('\nSorry we can not arrange big table, only two peoples will be invited. ');

// while (Guest_List.length > 2) {
//    let remove_Guest =  Guest_List.pop()
//    console.log(`Sorry Mr. ${remove_Guest} Your not invited for Dinner. `);
// }

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr ' + Guest_List[i] + ',\n\nYour are still invited.\n\nThank you!\n\n')
// }

// Guest_List.splice(0 ,2);
// console.log(Guest_List);


// Question Number: 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

let invititaions : string[] = ["Sr Zia khan","Kamran Tessori"]
let count_invititaions : number = invititaions.length

console.log(`${count_invititaions} peoplr will come to the dinner`)


