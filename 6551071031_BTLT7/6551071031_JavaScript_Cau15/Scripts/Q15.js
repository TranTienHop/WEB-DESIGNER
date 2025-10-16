$(document).ready(function () {
    // Ẩn tất cả các tab khi load trang
    $('.tab-item').hide();

    // Hiển thị tab đầu tiên
    $('.tab-item:first').show();
    $('.tab li:first').addClass('active');

    // Khi click vào tab
    $('.tab li a').click(function (e) {
        e.preventDefault(); // Ngăn không cho load lại trang

        // Xóa active của tất cả tab
        $('.tab li').removeClass('active');

        // Gán active cho tab đang click
        $(this).parent().addClass('active');

        // Ẩn tất cả nội dung tab
        $('.tab-item').hide();

        // Lấy id tab cần hiển thị (từ href của thẻ <a>)
        var tab_id = $(this).attr('href');

        // Hiển thị tab tương ứng
        $(tab_id).fadeIn();
    });
});
