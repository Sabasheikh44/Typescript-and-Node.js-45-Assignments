// Question Number : 31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let users : string[] = ["eric","haseeb","ali","fatima","admin"]

if (users.length === 0) {
    console.log("We need to find some users!")
} else {
    for (let user of users) {
        if ( user === "admin") {
            console.log("Hello admin, would you like to see a status report?")
        } else {
            console.log(`Hello ${user}, Thank you for logging in again`)
        }
    }
}

users = []
if (users.length === 0) {
    console.log('We need to find some users')

}