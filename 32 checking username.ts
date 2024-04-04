// Question Number: 32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

let current_users : string [] = ["admin","Eric","Ali","Hamza","fatima"]
let new_users : string [] = ["admin","fatima","aliza","Haseeb","Noor"]

let current_users_lower : string [] =current_users.map(user => user.toLowerCase())

for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`)
    } else {
        console.log(`yes ${new_user}, is still in avaliable list`)
    }
}