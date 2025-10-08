        function nhiPhanSangThapPhan(soNhiPhan) {
            var so = soNhiPhan.toString();
            var thapPhan = 0;
            var mu = 0;

            for (var i = so.length - 1; i >= 0; i--) {
                var chuSo = Number(so[i]);// chuyển đồi chuỗi ký tự thành số
                if (chuSo === 1) {
                    thapPhan += Math.pow(2, mu);  
                }
                mu++;
            }
            return thapPhan;
        }

        var nhiPhan = 11011011;
        var ketqua = nhiPhanSangThapPhan(nhiPhan);

        document.getElementById("ketqua").innerHTML =
            "Số nhị phân: " + nhiPhan + "<br>" +
            "Số thập phân tương ứng: " + ketqua;