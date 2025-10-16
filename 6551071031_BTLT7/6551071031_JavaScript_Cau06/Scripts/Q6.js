    $(document).ready(function() {
      $("#countBtn").click(function() {
        let count = $("#mySelect option").length;

        let items = [];
        $("#mySelect option").each(function() {
          items.push($(this).text());
        });

        alert("Số lượng mục trong danh sách: " + count + 
              "\nCác mục gồm:\n- " + items.join("\n- "));
      });
    });