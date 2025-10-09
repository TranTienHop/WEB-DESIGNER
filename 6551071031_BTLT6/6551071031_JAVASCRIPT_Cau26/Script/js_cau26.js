function tinhCanChi() {
  let nam = document.getElementById("nam").value.trim();

  if (nam === "" || isNaN(nam)) {
    alert("Vui lòng nhập năm hợp lệ (là số)!");
    document.getElementById("ketqua").value = "";
    return;
  }

  nam = parseInt(nam);
  if (nam <= 0) {
    alert("Năm phải lớn hơn 0!");
    document.getById("ketqua").value = "";
    return;
  }

  const can = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
  const chi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

  const tenCan = can[nam % 10];
  const tenChi = chi[nam % 12];

  document.getElementName = tenCan + " " + tenChi;
  document.getElementById("ketqua").value = tenCan + " " + tenChi;
}
