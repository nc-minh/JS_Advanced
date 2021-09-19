// IIFE: Immediately invoked function expression
// dùng dấu ; trước
// là hàm 'private'
// tạo ra phạm vi mới không phải phạm vi toàn cục
;(function(){
    console.log('now now')
})()

;(function(msg){
    console.log('now: ', msg)
})('hí')

const app = (function(){
    const cars = []
    return{
        get(index){
            return cars[index]
        },
        add(car){
            cars.push(car)
        },
        edit(index, car){
            cars[index] = car
        },
        delete(index){
            cars.splice(index, 1)
        }
    }
})()