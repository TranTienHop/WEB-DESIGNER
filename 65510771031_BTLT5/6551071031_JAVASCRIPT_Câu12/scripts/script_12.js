function tinhMu(b,n){
    var kq = 1;
    for (var i = 1;i<=n;i++){
        kq*=b;
    }
    return kq;
}
var b = 2;
var n = 5;
document.getElementById("ketqua").innerHTML =
  "Kết quả: " + b + "<sup>" + n + "</sup> = " + tinhMu(b,n);