// Closure:
// Là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó
// - Viết code ngắn ngon hơn 
// - Biểu diễn, ứng dụng tính private trong OOP
function createCounter(){
    let counter = 0
    function increase(){
        return ++counter
    }

    return increase
}

const counter1 = createCounter()

console.log(counter1());
console.log(counter1());
console.log(counter1());


// ví dụ tạo logger
function createLogger(namespace){
    function logger(message){
        console.log(`[${namespace}] ${message}`)
    }

    return logger
}

const infoLogger = createLogger('Info')

infoLogger('Bắt đầu gửi mail')
infoLogger('Gửi mail lỗi lần 1')
infoLogger('Gửi mail thành công')

// ví dụ lưu vào storage
function createStorage(key){

    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
        get(key){
            return store[key]
        },
        set(key, value){
            store[key] = value
            save()
        },
        remove(key){
            delete store[key]
            save()
        }
    }

    return storage
}

//profile.js

const ProfileSetting = createStorage('profile_setting')

console.log(ProfileSetting.get('fullName'))
console.log(ProfileSetting.get('age'))

ProfileSetting.set('fullName', 'Minh')
ProfileSetting.set('age', '28')
ProfileSetting.set('address', 'Thanh Hoa')