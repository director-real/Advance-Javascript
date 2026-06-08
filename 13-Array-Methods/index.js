// Old way to write function
// function double(number) {
//     return number * 2
// }


// const double = (number) => {
//     return number * 2
// }

// console.log(double(5))


// const celebrateUser = (name, age) => {
//     const upperName = name.toUpperCase()
//     const userAge = age

//     return `Woohoo! Amazing job, ${upperName} and your ${userAge} years old!`
// }

// console.log(celebrateUser("director-real", 20))


// const triple = (num) => num * 20

// console.log(triple(10))

// const sayHello = () => "Hello, welcome back to the course!"

// console.log(sayHello())

// const triple = (num) => num * 20

// console.log(triple(10))


// const square = (num1) => num1 * num1

// console.log(square(4))


// const makeEmail = (username) => {
//     const makeEmail = username + "@gmail.com"

//     return makeEmail
// }

// console.log(makeEmail("Myth"))


//LEARNING .map()

// const prices = [10, 20, 30]

// const salePrices = prices.map(price => price * 2)

// console.log(salePrices)

// const userNames = ["myth", "reflex", "purple"]

// const makeEmails = userNames.map(email => email + "@gmail.com")

// console.log(userNames)
// console.log(makeEmails)


//LEARNING .filter()

// const games = [
//     { title: "Cyberpunk", price: 60 },
//     { title: "Minecraft", price: 20 },
//     { title: "Elden Ring", price: 70}
// ]

// const premiumGames = games.filter(game => game.price > 50)

// console.log(premiumGames)

// const accounts = [
//     { username: "user1", password: "12345"},
//     { username: "user2", password: "2345"},
//     { username: "user3", password: "dsqmw90e09q21OPKSW"}
// ]

// const detectWeakPasswords = accounts.filter(account => account.password.length < 12)

// console.log(detectWeakPasswords)


//LEARNING .reduce()

// const bills = [5, 10, 15]

// const totalBill = bills.reduce((total, bill) => total + bill, 0)

// console.log(totalBill)

// const userBankAccounts = [
//     { account: "Myth1", money: 200},
//     { account: "MythMain", money: 10000}
// ]

// const totalBalance = userBankAccounts.reduce((total, money) => total + money.money, 0)

// console.log(totalBalance)