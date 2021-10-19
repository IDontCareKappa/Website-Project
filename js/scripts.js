function dodajDoKoszyka(nazwa, cena) {

}


document.addEventListener("DOMContentLoaded", function () {
    var but0 = document.getElementById("b0");
    but0.addEventListener('click', function () {
        fetch("http://lokalhost/test/dane/wpis0.txt").then(response => { return response.text(); }).then(dane => { document.getElementById("wpisy").innerHTML = dane; })
    }, false);
})

/*function pokazWpis(id) {
    //var kontener = document.getElementById("wpisy");
    //var tresc = '<div class="border-bottom border - light"> <div class="card-body"> <h4 class="card-title"><a href="#!">Arduino UNO</a></h4> <p class="card-text">Moduł Arduino UNO z mikrokontrolerem AVR ATmega328. Wyposażony w 32kB pamięci Flash, 2kB RAM, 14 cyfrowych wejść/wyjść.</p> </div > <div class="card-footer"><a class="btn btn-primary btn-sm w-100" onclick="pokazWpis(0)">Zobacz Wpis</a> </div> </div > ';
    //kontener.innerHTML = tresc;

    //var nazwa_pliku = 'wpis' + id + '.txt';
    //console.log(nazwa_pliku);

    document.addEventListener("DOMContentLoaded", function () {
        var but1 = document.getElementById("b1");
        but1.addEventListener('click', function () {
            fetch("http://lokalhost/test/dane/wpis0.txt").then(response => { return response.text(); }).then(dane => { document.getElementById("wpisy").innerHTML = dane; })
        }, false);
    })
}*/