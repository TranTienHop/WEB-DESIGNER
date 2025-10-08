function giaiThua(n) {


    var ketQua = 1;
    for (let i = 1; i <= n; i++) {
        ketQua *= i;
    }
    return ketQua;
}

var n = 6;
var kq = giaiThua(n);

document.getElementById("ketqua").innerHTML =
    "Số nguyên: " + n + "<br>" +
    "Giai thừa: " + kq;