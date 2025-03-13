let num:number = 5
let company:string = "Acme Corporation"
let isPublish:boolean = false
let me:string = "1"

let myArray: number[] = [1, 3, 4, 6, 7]
console.log({myArray})

let myArray2: string[] = ["The", "Subtle", "Art", "Of", "Not", "Giving", "A", "Fuck"]
console.log({myArray2})

let mixedArr: any[] = [1, 2, "Three", true, {name: "Dharamvir Bharati", writer: true}]
console.log({mixedArr})

// Mixed type in detail
// method 1 (Highly recommended)
let id:(number | string) = 5
id = "udgc5"
console.log({id})

// method 2
let id2:any = 5
id2 = "juh56"
console.log({id2})

// method 3
let id3:unknown = 7
id3 = "out83"
console.log({id3})

const conc = (a:string, b:string) => {
    return a + b
}

console.log(conc("Hello", " world"))
// console.log(conc(5, 4))
console.log(conc('5', '4'))

// Note the return type here
const conc2 = (a:string, b:string):string => {
    // we are expecting return to be string too :)
    // return 3
    // return "3"
    return a + b
}

console.log(conc2("Hello", "World"))

