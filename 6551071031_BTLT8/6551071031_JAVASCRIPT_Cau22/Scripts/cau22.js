document.getElementById("addSkill").addEventListener("click", function () {
    let container = document.getElementById("kynang-container");

    let div = document.createElement("div");
    div.innerHTML = `
        <input type="text" class="kynang" placeholder="Tên kỹ năng">
        <input type="range" min="0" max="100" class="mucdo">
    `;
    container.appendChild(div);
});

document.getElementById("dangky").addEventListener("click", function () {
    let hoten = document.getElementById("hoten").value;
    let diachi = document.getElementById("diachi").value;
    let sdt = document.getElementById("sdt").value;
    let email = document.getElementById("email").value;
    let nghe = document.getElementById("nghenghiep").value;

    let skills = document.querySelectorAll(".kynang");
    let mucdo = document.querySelectorAll(".mucdo");

    let output = `
        <h2>${hoten}</h2>
        <p>${diachi}</p>
        <p>${sdt}</p>
        <p>${email}</p>
        <p>${nghe}</p>
        <h3>Kỹ năng</h3>
    `;

    for (let i = 0; i < skills.length; i++) {
        let ten = skills[i].value || "Chưa nhập";
        let doSkill = mucdo[i].value;
        output += `
            <p>${ten}</p>
            <div class="skill-bar">
                <div class="skill-fill" style="width:${doSkill}%;"></div>
            </div>
        `;
    }

    document.getElementById("ketqua").innerHTML = output;
});
