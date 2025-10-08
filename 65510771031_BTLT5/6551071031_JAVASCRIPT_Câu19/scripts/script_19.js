function laiSuatDon(P, r, t) {
            //p số tiền gốc
            // r lãi 
            // t thời gian

            var A = P * (1 + r * t);

            return Math.round(A * 100) / 100;
        }

        var soTienGoc = 10000;  
        var laiSuat = 0.05;     
        var soNam = 3;           

        var tongTien = laiSuatDon(soTienGoc, laiSuat, soNam);

        document.getElementById("ketqua").innerHTML =
            "Số tiền gốc: " + soTienGoc + "<br>" +
            "Lãi suất hàng năm: " + (laiSuat*100) + "%<br>" +
            "Số năm: " + soNam + "<br>" +
            "Tổng số tiền sau " + soNam + " năm: " + tongTien;