function removecolor() {
    var select = document.getElementById("colorSelect");
    var selectedIndex = select.selectedIndex;
    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    } else {
        alert("Hãy chọn một màu để xóa!");
    }
}
