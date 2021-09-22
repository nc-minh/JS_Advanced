// Là phương thức trong prototype của Function constructor, phương thức này được 
// dùng để gọi hàm và cũng có thể bind this cho hàm. 
// - gọi hàm với call method 
// - gọi hàm với bind this, lưu ý trong strict mode vẫn có this nếu được bind
// - thể hiện tính kế thừa (extends) trong OOP 
// - mượn hàm (function borrowing), thêm ví dụ với arguments

const teacher = {
    firstName: 'Minh',
    lastName: 'Thu'
}

const me = {
    firstName: 'Minh',
    lastName: 'Nguyễn',
    showFullName(){
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

me.showFullName.call(teacher)

