//A. Make a user object

let user = {
    name: "sally black",
    email: "sallyblack@example.com",
    age: 30,
    purchased: []
};



//B. Update the user

let newUser = { ...user }; 
newUser.email = "newemail@example.com"; 
// Incrementing age
let anotherUser = { ...user }; 
anotherUser.age++; 




//C. Adding keys and values

let newUserWithLocation = Object.assign({}, user); 
newUserWithLocation.location = "New York"; 





//D. Shopaholic!


let users = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
    purchased: []
};
// Adding purchased items
users.purchased.push("carbohydrates");
users.purchased.push("peace of mind");
users.purchased.push("Merino jodhpurs");
// Logging "Merino jodhpurs" 
console.log(users.purchased[2]);







//E. Object-within-object

// Adding friend object to user object
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "New York",
    purchased: []
};

//friend's name and location
console.log(user.friend.name);
console.log(user.friend.location);

// Changing age
user.friend.age = 55;

// purchased items 
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");

// Logging "A latte" 
console.log(user.friend.purchased[1]);







//F.loops


console.log("User's purchased items:");
for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
}
// loop over the friend's purchased items
console.log("\nFriend's purchased items:");
for (let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
}
