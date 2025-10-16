    $(document).ready(function() {
      $(".op").click(function() {
        let a = parseFloat($("#num1").val());
        let b = parseFloat($("#num2").val());
        let op = $(this).data("op");
        let result;

        if (isNaN(a) || isNaN(b)) {
          alert("Vui lòng nhập đủ hai số!");
          return;
        }

        switch (op) {
          case "+": result = a + b; break;
          case "-": result = a - b; break;
          case "*": result = a * b; break;
          case "/": 
            if (b === 0) {
              alert("Không thể chia cho 0!");
              return;
            }
            result = a / b; 
            break;
          case "^": result = Math.pow(a, b); break;
          default: result = "Lỗi";
        }

        $("#result").val(result);
      });
    });