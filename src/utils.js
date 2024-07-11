const toLocaleString = (num) => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ")

const removeSpaces = (num) => num.toString().replace(/\s/g, "")

const math = (a, b, sign) =>
    sign === "+" ? a + b : sign === "-" ? a - b : sign === "X" ? a * b : a / b

const zeroDivisionError = "Can't divide with 0"

export {
    toLocaleString,
    removeSpaces,
    math,
    zeroDivisionError
}