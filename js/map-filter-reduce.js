const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// //#2
// let newUser = users.filter(user => user.languages.length >= 3);
//
// console.log(newUser);
//
// //#3
// let emails = users.map(user => user.email);
//
// console.log(emails);
//
// //#4
// let totalYears = users.reduce((bucket, user) => {
//     return bucket + user.yearsOfExperience
// },0);
//
// let avgYears = totalYears / users.length;
//
// console.log(avgYears);

//#5
let longestEmail = users.reduce((longest, current) => {
    console.log(longest.email.length);
    console.log(current.email.length);
    if(longest.email.length <= current.email.length){
        return current.email
    }else{
        return longest.email
    }
});

console.log(longestEmail)

//#6
// let userNames = users.reduce((previousUser, currentUser) => {
//    return previousUser.name += ', ' + currentUser.name
// }," ");
//
// console.log(userNames)