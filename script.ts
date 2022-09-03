
const html2 = document.querySelector("html").addEventListener("click",(event) => {
    console.log(event)
},true)



const logToConsole = (consoleObjectStringOrVarriable:string | number | string[]  | any ) => {
    console.log(consoleObjectStringOrVarriable) 
}


let p = "Ahoj"

logToConsole(true)


const myArray:{
    readonly names : string
} = {
    names : "Sebastian"
}

logToConsole(myArray)

console.log("a")
