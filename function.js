// practice functions
//Rhys 13.08.19



// const reverseString = s => {
//      return s.split('').reverse('').join('')
// }

// console.log(reverseString('hello world'))


// const addThreeNumbers = (num1, num2, num3) => {
//     console.log('i am adding your three numbers')
//     return num1 + num2 + num3
// }

// console.log(addThreeNumbers( 10, 10, 10))

// let coffeeIsGrinding = true;

// const pressGrindBeans = () => {
//     if(coffeeIsGrinding){
//         console.log('Stopping the grind');
//         coffeeIsGrinding = false;
//     } else {
//         console.log('grinding is about to begin');
//         coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans()



// const coffee = (size, type) => {
//      return `I would like a ${size} ${type} please`
// }

// console.log(coffee('large', 'latte'))

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7, 3);
// console.log(addUp(2, 5))

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`)
    orderCount++;
}

takeOrder('chilli', 'chrizo');