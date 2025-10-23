$(document).ready(function() {
  $("h3").click(function() {
    // Ẩn tất cả nội dung khác
    $(".box").not($(this).next()).slideUp();
    
    // Toggle phần nội dung tương ứng
    $(this).next(".box").slideToggle();
  });
});
