//side effect
//1. Value types (Primitive data types)
// - String
// - Number
// - Boolean
// - BigInt
// - Symbol
// - undefined
// - null

// 2. Reference types (Non-primitive data types)
// - Object
// - Array
// - Function

// # Data types with function
// - Value types
// - Reference types

function createCar(obj){
    obj = JSON.parse(JSON.stringify(obj))//nếu dữ liệu lớn không hiệu quả, nếu 1 cấp thì dùng ...(spread)
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name: 'BMW'
}

const newCar = createCar(car)

console.log(car);
console.log(newCar);

//
const a = {
    name: 'car'
}

const b = {
    name: 'car'
}

console.log(a==b);

//