function getFormValue(event) {
    event.preventDefault(); // ngăn form gửi đi

    var form = document.getElementById("form1");
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;

    alert("Họ và tên: " + firstName + " " + lastName);
}
