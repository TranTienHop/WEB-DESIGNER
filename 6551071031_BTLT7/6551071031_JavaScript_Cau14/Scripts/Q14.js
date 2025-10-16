$(document).ready(function () {
    // Lắng nghe sự kiện thay đổi của checkbox
    $('.toggle-switch-2').change(function () {
        // Nếu đang bật (ON)
        if ($(this).is(':checked')) {
            // Chuyển sang theme sáng
            $('body').css({
                'background-color': '#eaebeb',
                'color': '#000'
            });

            // Đổi ảnh nền (ON)
            $('#image-effect-2 img').removeClass('fadeEffect');
            $('#image-effect-2 img:eq(1)').addClass('fadeEffect');
        } else {
            // Nếu tắt (OFF) → theme tối
            $('body').css({
                'background-color': '#222',
                'color': '#fff'
            });

            // Đổi ảnh nền (OFF)
            $('#image-effect-2 img').removeClass('fadeEffect');
            $('#image-effect-2 img:eq(0)').addClass('fadeEffect');
        }
    });
});
