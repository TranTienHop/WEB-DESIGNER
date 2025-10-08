class HinhTru {
    constructor(radius, height) {
        this.Radius = radius;
        this.Height = height;
    }
    Xuat() {
        return "Radius : " + this.Radius + "<br>" +
            "Height : " + this.Height;
    }
    TinhTheTich() {
        return Math.PI * this.Radius * this.Radius * this.Height;
    }

    TinhDienTichToanPhan() {
        return 2 * Math.PI * this.Radius * (this.Radius + this.Height);
    }
}
var hinhtru = new HinhTru(5, 10);
document.getElementById("thongtin").innerHTML += hinhtru.Xuat()+"<br>";
document.getElementById("thongtin").innerHTML +=
    "Thể tích: " + hinhtru.TinhTheTich().toFixed(2) + "<hr>";

hinhtru.Height = 30;
document.getElementById("thongtin").innerHTML +=
    "Sau khi cập nhật Height = 30:<br>" + hinhtru.Xuat() +
    "<br> Diện tích toàn phần: " + hinhtru.TinhDienTichToanPhan().toFixed(2);