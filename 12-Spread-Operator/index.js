const fruits = ["apple", "banana"]
const newFruits = [...fruits, "mango", "kiwi"]

// console.log(fruits)
// console.log(newFruits)


const user = {
    username: "director-real",
    role: "developer"
}
const updatedUser = {
    ...user,
    location: "Florida"
}

// console.log(user)
// console.log(updatedUser)

function addAllNumbers(...numbers) {
    console.log(numbers)
}

// addAllNumbers("hello world!", 10, 5, true)

const originalLaptop = {
    brand: "Dell",
    ram: "8GB"
}

const upgradedLaptop = {
    ...originalLaptop,
    ram: "16GB",
    storage: "512GB"
}

// console.log(originalLaptop)
// console.log(upgradedLaptop)