class User {
    constructor(name, age) {
        this.Name = name;
        this.Age = age;
    }
    Xuat() {
        return "Họ Tên : " + this.Name + "<br>" +
            "Tuổi: " + this.Age + "<br>";
    }
    ThemSurname(surname) {
        this.Surname = surname;
    }

    DoiTuoi(age) {
        this.Age = age;
    }
}

var user1 = new User("Max", 20);
user1.ThemSurname("Lee");

document.getElementById("thongtin").innerHTML += user1.Xuat()+"<hr>";
document.getElementById("thongtin").innerHTML += user1.Xuat() +
    "Họ: " + user1.Surname+"<hr>";

user1.DoiTuoi(30);
document.getElementById("thongtin").innerHTML += user1.Xuat() +
    "Họ: " + user1.Surname+"<hr>";

