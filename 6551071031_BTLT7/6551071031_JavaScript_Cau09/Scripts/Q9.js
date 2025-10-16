    $(function() {
      $("#finishBtn").click(function() {
        let err = "";

        const mailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const dateRe = /^(0[1-9]|1[0-2])[\/\-](0[1-9]|[12]\d|3[01])[\/\-]\d{4}$/;
        const zipRe = /^\d{5}$/;

        const name = $("#name").val().trim();
        const gender = $("input[name='gender']:checked").val();
        const email = $("#email").val().trim();
        const birthday = $("#birthday").val().trim();
        const address = $("#address").val().trim();
        const region = $("#region").val().trim();
        const zip = $("#zipcode").val().trim();

        if (name === "") err += "• Nhập họ tên.<br>";
        if (!gender) err += "• Chọn giới tính.<br>";
        if (email === "" || !mailRe.test(email)) err += "• Email không hợp lệ.<br>";
        if (birthday === "" || !dateRe.test(birthday)) err += "• Ngày sinh không hợp lệ (MM/DD/YYYY).<br>";
        if (address === "") err += "• Nhập địa chỉ.<br>";
        if (region === "") err += "• Nhập khu vực.<br>";
        if (!zipRe.test(zip)) err += "• ZIP code phải gồm 5 chữ số.<br>";

        if (err !== "") {
          $("#error-message").html(err);
        } else {
          $("#error-message").html("✅ Dữ liệu hợp lệ! Cảm ơn bạn.");
        }
      });

      $("#clearBtn").click(function() {
        $("#personalInfoForm")[0].reset();
        $("#error-message").empty();
      });
    });