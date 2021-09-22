const iPhone7 = {
    //Properties
    name: 'iPhone 7',
    color: 'Pink',
    weight: 400,

    //Method
    takePhoto(){
        console.log('Take a photo')
        console.log(this);
    },
    objChild: {
        charge(){
            console.log('charging');
            console.log(this);
        }
    }
}

console.log(iPhone7.takePhoto());
console.log(iPhone7.objChild.charge());

//this: trả về đối tượng nó đang thuộc về . trước nó
//this trong một hàm là windown
//this trong một hàm là undefined khi ở strict mode
//this ở ngoài là arrow function thì là this ở ngoài
