const myNums = [1,2,3,4]

const total = myNums.reduce( function(acc, currVal) {
    console.log(`acc: ${acc} and Current Val: ${currVal}`)

    return acc * currVal
}, 1)

console.log(total)