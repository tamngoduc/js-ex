/*  
    BÀI 1:
    * Đầu vào:
   - Lương 1 ngày
   - Số ngày làm
    * Xử lí:
   - Khởi tạo biến lương 1 ngày với giá trị 100000
   - Tạo biến số ngày làm
   - Lương = lương 1 ngày * số ngày làm
   * Đầu ra:
  - Thông báo tiền lương nhân viên
    */

var pay = 100000;
var day;
day = 30;
salary = pay * day;
console.log("Tien luong cua nhan vien la: " + salary);

/* 
BÀI 2: 
* Đầu vào:
- 5 số thực
* Xử lí:
- Tạo 5 biến số thực
- Gán giá trị cho 5 biến số
- Tính tổng 5 số và chia cho 5
* Đầu ra:
- Thông báo giá trị trung bình của 5 số thực
*/

var num1, num2, num3, num4, num5, average;
num1 = 1;
num2 = 68;
num3 = 45;
num4 = 50;
num5 = 80;
average = (num1 + num2 + num3 + num4 + num5) / 5;
console.log("Gia tri trung binh cua 5 so la: " + average);

/* 
BÀI 3:
* Đầu vào:
- Giá USD: 235000 VND
- Số tiền USD
* Xử lí:
- Khởi tạo biến tỉ giá USD/VND với giá trị 235000
- Tạo biến số tiền USD
- Gán giá trị cho biến số tiền USD
- Số tiền USD sau khi quy đổi ra VND = số tiền USD * tỉ giá USD/VND
* Đầu ra:
- Thông báo số tiền sau khi quy đổi ra VND
*/

var rate = 23500;
var USD, VND;
USD = 2;
VND = USD * rate;
console.log("So tien sau khi quy doi ra VND la: " + VND);

/*
* Đầu vào:
- Chiều dài và chiều rộng của HCN
* Xử lí:
- Tạo 2 biến chiều dài và chiều rộng
- Diện tích = chiều dài * chiều rộng
- Chu vi = (chiều dài + chiều rộng) * 2
* Đầu ra:
- Diện tích và chu vi cùa HCN
*/

var a, b, S, C;
a = 10;
b = 8;
S = a * b;
C = (a + b) * 2;
console.log("Dien tich HCN la: " + S);
console.log("Chu vi HCN la: " + C);

/*
* Đầu vào:
- Số có 2 chữ số
* Xử lí:
- Tạo biến số n
- Gán giá trị cho biến số có 2 chữ số
- Lấy chữ số hàng đơn vị: Maht.floor(n / 10)
- Lấy chữ số hàng đơn vị: n % 10
- Tính tổn chữ số hàng chục và chữ số hàng đơn vị
* Đầu ra:
- Thông báo tổng 2 chữ số của số vừa nhập
*/

var n, e1, e2, sum;
n = 12;
e1 = Math.floor(n / 10);
e2 = n % 10;
sum = e1 + e2;
console.log("Tong cac chu so cua so vua nhap la: " + sum);
