$(document).ready(function() {
    $("#fileupload").on("change", function() {
        let file = $(this).prop("files")[0]; // lấy file đầu tiên
        if (file) {
            let fileName = file.name; // tên file đầy đủ
            let extension = fileName.split('.').pop(); // phần mở rộng
            $(".filename").text("Tên file: " + fileName + " | Phần mở rộng: ." + extension);
        } else {
            $(".filename").text("Không có file nào được chọn");
        }
    });
});
