    function hienThiNgayGio() {

        var today = new Date();

      var ngay = today.getDate();
      var thang = today.getMonth() + 1; // Tháng bắt đầu từ 0
      var nam = today.getFullYear();
      var gio = today.getHours();
      var phut = today.getMinutes();
      var giay = today.getSeconds();

      var ketQua = "Ngày: " + ngay + "/" + thang + "/" + nam + 
                   " Giờ: " + gio + ":" + phut + ":" + giay;

      alert("Trang này cho biết\n" + ketQua);
    }
