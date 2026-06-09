// console.log("Starting rocket countdown...")

// const rocketTimer = setTimeout(() => {
//     console.log("LIFT OFF!")
// }, 5000)

// const abortLaunch = true

// if (abortLaunch) {
//     clearTimeout(rocketTimer)
//     console.log("Launch aborted safely.")
// }

// let count = 5

// const countdown = setInterval(() => {
//     console.log(count)
//     count -= 1

//     if (count === 0) {
//         clearInterval(countdown)
//         console.log("Time's up!")
//     }
// }, 1000)


//challenge

const codeInfo = document.querySelector("#code-info")
let timeLeft = 3

const verificationTimer = setInterval(() => {
    codeInfo.textContent = `Resend code in: ${timeLeft}`
    timeLeft -= 1

    if (timeLeft <= -1) {
        clearInterval(verificationTimer)
        codeInfo.textContent = "You can now resend the code!"
    }

}, 1000)