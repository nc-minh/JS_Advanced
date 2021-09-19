//Các loại phạm vi:
//- Global - Toàn Cầu
//- Code block - Khối mã: let, const
//- Local scoope - Hàm: var, function
const int = 10
{
    const int = 9
    {
        const int = 8
        {
            const int = 7
            {
                const int = 6
                console.log(int)
            }
        }
    }
}

//dùng biến trong khối mã tiết kiệm bộ nhớ!
//nếu khai biến ở global thì thực thi xong không bị xóa!