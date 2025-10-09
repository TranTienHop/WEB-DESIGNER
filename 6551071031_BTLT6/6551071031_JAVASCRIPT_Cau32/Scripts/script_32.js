function display_random_image() {
    var images = [
        {
            src: "Images/phu_quoc_6.jpg",
            width: "240",
            height: "160"
        },
        {
            src: "Images/phu_quoc_5.jpg",
            width: "320",
            height: "195"
        },
        {
            src: "Images/phu_quoc_4.jpg",
            width: "500",
            height: "343"
        }
    ];

    var randomIndex = Math.floor(Math.random() * images.length);
    var selected = images[randomIndex];

    var img = document.createElement("img");
    img.src = selected.src;
    img.width = selected.width;
    img.height = selected.height;

    var container = document.getElementById("imageContainer");
    container.innerHTML = "";
    container.appendChild(img);
}
