    $(document).ready(function() {
      $("#linkForm").submit(function(e) {
        e.preventDefault(); 

        let link = $("#linkInput").val().trim();

        if (link === "") {
          alert("Vui lòng nhập đường link trước khi submit!");
          return;
        }

        let confirmGo = confirm("Bạn có chắc muốn truy cập đường link này?");
        if (confirmGo) {
          window.location.href = link;
        } 
      });
    });