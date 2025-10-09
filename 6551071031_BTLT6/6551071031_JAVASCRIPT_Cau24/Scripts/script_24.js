function xuatThu() {
  var ngay = parseInt(document.getElementById("ngay").value);
  var thang = parseInt(document.getElementById("thang").value);
  var nam = parseInt(document.getElementById("nam").value);

  var d = new Date(nam, thang - 1, ngay); // tháng trong JS tính từ 0-11
  var thu = d.getDay(); // 0: Chủ nhật, 1: Thứ 2, ...

  var thuVN = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

  var ketqua = thuVN[thu] + " Ngày " + ngay + " tháng " + thang + " năm " + nam;
  document.getElementById("ketqua").innerText = ketqua;
}
