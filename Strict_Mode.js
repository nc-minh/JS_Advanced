//hoạt động bằng cách thêm use strict vào đầu file
//có thể dùng riêng cho hàm và js internal
"use strict"

//báo lỗi khi gán lại giá trị có writeable: false
//báo lỗi khi trùng tên trong hàm
//khai báo hàm trong code block thi hàm sẽ thuộc phạm vi code block
//không đặt tên biến, hàm bằng từ khóa nhạy cảm của ngôn ngữ
//tránh quên từ khóa khai báo biến
//tránh trùng tên biến dẫn tới lỗi logic
//sử dụng bộ nhớ hiểu quả vì tránh tạo biến global
fullName = 'a'
console.log(fullName)

const student = Object.freeze({
    age: 0
})

student.age = 1

console.log(student.age);