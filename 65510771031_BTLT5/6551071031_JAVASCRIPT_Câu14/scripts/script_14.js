class Student{
    constructor(name, numberID,gender){
        this.Name= name;
        this.NumberID= numberID;
        this.Gender= gender;
    }
    Xuat(){
        return "Họ tên: " + this.Name+"<br>"+
                "ID: "+ this.NumberID+"<br>"+
                "Giới Tính"+this.Gender;
    }
}
var sv1 = new Student("Nguyen Van A", "SV001", "Nam");
document.getElementById("ketqua").innerHTML = sv1.Xuat();