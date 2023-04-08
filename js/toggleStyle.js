function toggleStyleSheet() {
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");

    if (link1.getAttribute("href") == "css/style-dark.css") {
        link1.setAttribute("href", "css/style-light.css");
        link2.setAttribute("href", "css/style-dark.css");
    } else {
        link1.setAttribute("href", "css/style-dark.css");
        link2.setAttribute("href", "css/style-light.css");
    }
}