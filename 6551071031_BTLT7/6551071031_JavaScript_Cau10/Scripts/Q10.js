    $(function() {
  let expression = "";

  // Thêm ký tự khi nhấn nút
  $("button").not("#equal, #clear").click(function() {
    expression += $(this).text();
    $("#display").val(expression);
  });

  // Tính kết quả
  $("#equal").click(function() {
    try {
      if (/^[0-9\.\+\-\*\/]+$/.test(expression)) {
        const result = eval(expression);
        $("#display").val(result);
        expression = result.toString();
      } else {
        alert("Biểu thức không hợp lệ!");
      }
    } catch {
      alert("Lỗi cú pháp!");
      expression = "";
      $("#display").val("");
    }
  });

  // Xóa toàn bộ
  $("#clear").click(function() {
    expression = "";
    $("#display").val("");
  });

  // Cho phép nhập bàn phím
  $(document).on("keydown", function(e) {
    const key = e.key;

    if(/[0-9\+\-\*\/\.]/.test(key)) {
      expression += key;
      $("#display").val(expression);
    } else if(key === "Enter") {
      $("#equal").click();
    } else if(key === "Backspace") {
      expression = expression.slice(0, -1);
      $("#display").val(expression);
    }
  });
});
