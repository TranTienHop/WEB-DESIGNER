function daoNguocSo(n) {
    var soDao = 0;
    while (n != 0) {
        soDao = soDao * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return soDao;
}

var so = 6543210;
document.getElementById("ketqua").innerHTML =
    "Số đảo ngược của " + so + " là: " + daoNguocSo(so);