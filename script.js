function active(el) {
    let temp = el.nextElementSibling;
    let image = el.getElementsByTagName("img")[0];
    if (temp.classList.contains("hide")) {
        temp.classList.remove("hide");
        image.src = "./images/icon-minus.svg";
    }
    else {
        temp.classList.add("hide");
        image.src = "./images/icon-plus.svg";
    }
}