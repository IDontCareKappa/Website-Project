
document.addEventListener("DOMContentLoaded", function () {
    var but0 = document.getElementById("b0");
    but0.addEventListener('click', function () {
        fetch("http://localhost/projektkoncowy/dane/wpis0.txt")
            .then(response => { return response.text(); })
            .then(dane => { document.getElementById("wpisy").innerHTML = dane; });
    },
        false);

    var but1 = document.getElementById("b1");
    but1.addEventListener('click', function () {
        fetch("http://localhost/projektkoncowy/dane/wpis1.txt")
            .then(response => { return response.text(); })
            .then(dane => { document.getElementById("wpisy").innerHTML = dane; });
    },
        false);

    var but2 = document.getElementById("b2");
    but2.addEventListener('click', function () {
        fetch("http://localhost/projektkoncowy/dane/wpis2.txt")
            .then(response => { return response.text(); })
            .then(dane => { document.getElementById("wpisy").innerHTML = dane; });
    },
        false);

    var but3 = document.getElementById("b3");
    but3.addEventListener('click', function () {
        fetch("http://localhost/projektkoncowy/dane/wpis3.txt")
            .then(response => { return response.text(); })
            .then(dane => { document.getElementById("wpisy").innerHTML = dane; });
    },
        false);

    var but4 = document.getElementById("b4");
    but4.addEventListener('click', function () {
        fetch("http://localhost/projektkoncowy/dane/wpis4.txt")
            .then(response => { return response.text(); })
            .then(dane => { document.getElementById("wpisy").innerHTML = dane; });
    },
        false);

    var but5 = document.getElementById("b5");
    but5.addEventListener('click', function () {
        fetch("http://localhost/projektkoncowy/dane/wpis5.txt")
            .then(response => { return response.text(); })
            .then(dane => { document.getElementById("wpisy").innerHTML = dane; });
    },
        false);

});