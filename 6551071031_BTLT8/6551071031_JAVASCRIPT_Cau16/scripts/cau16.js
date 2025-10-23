$(document).ready(function() {
  // Dùng jQuery UI cho chọn ngày
  $("#datepicker").datepicker({
    dateFormat: "dd/mm/yy"
  });

  // Khi nhấn nút Add Row
  $(".add-row").click(function() {
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let birthdate = $("#datepicker").val().trim();

    // Kiểm tra dữ liệu hợp lệ
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === "" || email === "" || birthdate === "") {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    if (!emailPattern.test(email)) {
      alert("Email không hợp lệ!");
      return;
    }

    // Thêm dòng mới
    let newRow = `
      <tr>
        <td><input type="checkbox" class="select-row"></td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${birthdate}</td>
      </tr>`;
    $("table tbody").append(newRow);

    // Xóa nội dung input
    $("#name, #email, #datepicker").val("");
  });

  // Khi nhấn nút Delete Row
  $(".delete-row").click(function() {
    $("table tbody").find('input.select-row:checked').each(function() {
      $(this).closest("tr").remove();
    });
  });
});
