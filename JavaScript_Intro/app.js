// const dayOfWeek = prompt("What day is today?").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("Get the ball rolling")
// } else if (dayOfWeek === "saturday") {
//     console.log('Awesome')
// } else if (dayOfWeek === "friday") {
//     console.log('Friyaayyyyy')
// } else {
//     console.log("Business as usual")
// }

// const password = prompt('Enter Password')

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log('Good Password')
//     } else {
//         console.log('Remove space')
//     }
// } else {
//     console.log('Needs to be longer than 6 characters.')
// }

// const userInput = prompt('Input Something')

// if (userInput) {
//     console.log('TRUTHY')
// } else {
//     console.log('FALSY')
// }

// const password = prompt("Enter Password")

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Good Stuff')
// } else {
//     console.log('Invalid Password')
// }

// const username = prompt('Enter Username')

// if (!username) {
//     console.log('Enter Sth.')
// }

const day = 2;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
    case 7:
        console.log('Weekend')
        break;
    default:
        console.log('Invalid Number')
}