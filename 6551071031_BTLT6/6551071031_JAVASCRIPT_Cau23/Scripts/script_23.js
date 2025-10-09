function tinhLuong() {
  var luong = parseFloat(document.getElementById("luong").value);
  var heso = parseFloat(document.getElementById("heso").value);
  var kq = luong * heso;
  document.getElementById("luongthang").value = kq;
}
