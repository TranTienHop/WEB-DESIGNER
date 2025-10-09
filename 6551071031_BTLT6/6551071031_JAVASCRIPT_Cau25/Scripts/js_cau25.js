function tinhTien() {
  let gia = {
    "Bún bò": 20000, "Hủ tiếu": 18000, "Bánh canh": 19000, "Phở bò": 20000,
    "Bánh mì thịt": 15000, "Nui": 15000,
    "Cà phê đá": 12000, "Cà phê sữa đá": 15000, "Chanh dây": 13000,
    "Sữa tươi": 12000, "Cam vắt": 17000, "Xí muội": 12000
  };

  let monDaChon = [];
  let tong = 0;

  document.querySelectorAll('input[name="food"]:checked').forEach(item => {
    monDaChon.push(item.value);
    tong += gia[item.value];
  });

  document.querySelectorAll('input[name="drink"]:checked').forEach(item => {
    monDaChon.push(item.value);
    tong += gia[item.value];
  });

  let time = document.querySelector('input[name="time"]:checked').value;
  if (time === "night") tong *= 1.1; // Ban đêm +10%

  if (monDaChon.length === 0) {
    document.getElementById("ketqua").innerHTML = "<b>Vui lòng chọn món!</b>";
    return;
  }

  // Tạo bảng kết quả
  let html = "<table><tr><th>Các món đã dùng</th><th>Tiền</th></tr>";
  monDaChon.forEach(m => {
    html += `<tr><td>${m}</td><td>${gia[m].toLocaleString()} đ</td></tr>`;
  });
  html += `<tr><th>Tổng tiền</th><th>${tong.toLocaleString()} đ</th></tr></table>`;
  document.getElementById("ketqua").innerHTML = html;
}
