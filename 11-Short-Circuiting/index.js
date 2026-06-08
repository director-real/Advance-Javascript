let userSetting = "" // User didn't choose a theme (empty string is falsy)
let defaultTheme = "dark";

// Instead of a long if/else statement:
let currentTheme = userSetting || defaultTheme

// console.log(currentTheme) // Output: is "dark" since || is Or and && is And

let isLoggedIn = true

let status = isLoggedIn && "Welcome to the Dashboard!"

// console.log(status)

// Imagine you are building a profile page. Write a piece of code using short-circuiting (no if statements allowed!)

// 1. Create a variable for a user's customStatus. Leave it as an empty string "".

// 2. Create a variable called finalStatus. Use the || operator so that if customStatus is empty, finalStatus automatically defaults to the string "Hi there!".

// 3. console.log(finalStatus) to make sure it works.


let customStatus = ""

let finalStatus = customStatus || "Hi there!"
// console.log(finalStatus)



// Imagine you are building a moderation dashboard for a community site. You only want to allow a deletion to happen if the user has admin rights.

// 1. Create a boolean variable called isAdmin and set it to true.

// 2. Create a variable called deletePostAction. Use the && short-circuit operator so that it only evaluates to the string "Post successfully deleted." if isAdmin is true.

// 3. console.log(deletePostAction) to verify it outputs the success message.

// 4. Bonus Step: Flip isAdmin to false and log it again. What does it output in the console now? : Answer it will console.log false since both statements werent true

const isAdmin = true

const deletePostAction = isAdmin && "Post successfully deleted"

console.log(deletePostAction)

