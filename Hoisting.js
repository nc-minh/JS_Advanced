//Hoisting với 'var' và 'function declaration'
//Được đưa vào 'Temporal Dead Zone'

//var: được khởi tạo giá trị
//let: giống như giữ chỗ :))

const counter1 = makeCounter()

console.log(counter1())

function makeCounter(){
    let counter = 0
    return increase
    function increase(){
        return ++counter
    }
}