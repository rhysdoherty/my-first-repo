//arrays

// let coffeeOrder = [
//     'Alex - Cortado',
//     'Ben - Cortado',
//     'Charlie - Whatever'
// ];

// let i = 0
// let l = 100

// for(i = 0; i < l; i++){
//     console.log('hi ' + i)
// }
 

//  console.log(coffeeOrder.pop())
//  console.log(coffeeOrder)

// let favoriteSongs = [
//     'abba 1',
//     'abba 2',
//     'abba 3'
// ]

// favoriteSongs.push('hi')
// favoriteSongs[1] = 'balls'
// console.log(favoriteSongs[1])

// console.log(favoriteSongs.length)

// // console.log(coffeeOrder)


//challenge one

// let favoriteWebs = [
//     'UFC.com',
//     'Dominos.com',
//     'SkyBet.com'
// ]
// favoriteWebs.unshift('Hello', 'Bye')
// favoriteWebs.pop()
// console.log(favoriteWebs)

//challenge two

// let favoriteFood = [
//     'Pizza',
//     'Bacon',
//     'Burgers'
// ]

// favoriteFood.shift()
// console.log(favoriteFood)

// favoriteFood.unshift('More Pizza')
// console.log(favoriteFood)

//  myMostFavorite = favoriteFood.slice(0, 2)
//  console.log(myMostFavorite)


let drinks = ["Coffee", "Coke", "Fanta", "Tea", "Juice"]
console.log(drinks)
console.log(drinks.length)
let pos = drinks.indexOf("Beer")
console.log(pos)
let drinkCheck = (drink) =>{
    if(drinks.indexOf(drink) != -1){
        console.log(`Yes ${drink} is in the list`)
    }else{
        console.log(`Sorry ${drink} is not in the list`)
    }
}
drinkCheck("Fanta")