function sprawdz(){
    var poprawne = true;

    if( !checkInputEmail() ) poprawne = false;
    if( !checkInputName() ) poprawne = false;
    if( !checkInputLastName() ) poprawne = false;
    if( !checkInputTel() ) poprawne = false;
    if( !checkCountry() ) poprawne = false;
    if( !checkField() ) poprawne = false;
    if( !checkLevel() ) poprawne = false;
    if( !checkText() ) poprawne = false;

    if( poprawne ){
        pokazDane();
    }

    return poprawne;
}

function checkRadio( name ){
    var radio = document.getElementsByName( name );

    for( var i = 0; i < radio.length; i++ ){
        if( radio[i].checked ) return radio[i].value;
    }

    return false;
}

function checkCheckboxes( name ){
    var checkedCheckboxes = "";
    var checkbox = document.getElementsByName( name );

    for( var i = 0; i < checkbox.length; i++ ){
        if( checkbox[i].checked && checkedCheckboxes == "" ){
            checkedCheckboxes = checkbox[i].value;
        } else if( checkbox[i].checked ){
            checkedCheckboxes += ', ';
            checkedCheckboxes += checkbox[i].value;
        }
    }

    return checkedCheckboxes;
}

function checkMultiSelect( id ){
    var select = document.getElementById( id );
    var selected = "";

    for( var i = 0; i < select.options.length; i++ ){
        if( select.options[i].selected && selected == "" ){
            selected += select.options[i].value;
        } else if( select.options[i].selected ){
            selected += ', ' + select.options[i].value;
        }
    }

    return selected;
}

function sprawdzRegex( id, regex ){
    var element = document.getElementById( id );

    if( !regex.test( element.value ) ) return ( false );
    else return ( true );
}

function sprawdzTextArea( id ){
    if( document.getElementById( id ).value === "" ) { return false; }
    else { return true; }
}

function pokazDane(){
    var dane = "Czy chcesz wysłać nam następujące dane?\n\n";
    dane +=  'Email: '          + document.getElementById( 'inputEmail' ).value         + '\n' +
                'Imie: '        + document.getElementById( 'inputName' ).value          + '\n' +
                'Nazwisko: '    + document.getElementById( 'inputLastName' ).value      + '\n' + 
                'Telefon: '     + document.getElementById( 'inputTel' ).value           + '\n' +
                'Kraj: '        + checkMultiSelect( "kraj" )                            + '\n' + 
                'Dziedzina: '   + checkCheckboxes( "dziedzina" )                        + '\n' +
                'Poziom: '      + checkRadio( "poziom" )                                + '\n' +
                'Opis: '        + document.getElementById( 'text' ).value;

    if (window.confirm(dane)) return true;
    else return false;
}


//Funckje potrzebne do onchange/oninput

function checkInputEmail(){
    const emailRegex = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    return sprawdzPole( "inputEmail", "emailError", "emailOk", emailRegex );
}

function checkInputName(){
    const imieRegex = /^\s*^[A-ZŁŹŚĆŻ][a-złźśćżęąń]+(?:\s+[A-ZŁŹŚĆŻ][a-złźśćżęąń]+)*\s*$/;
    return sprawdzPole( "inputName", "imieError", "imieOk", imieRegex );
}

function checkInputLastName(){
    const nazwRegex =  /^[A-ZŁŹŚĆŻ][a-złźśćżęąń]{2,20}(-[A-ZŁŹŚĆŻ][a-złźśćżęąń]{2,20})?$/;
    return sprawdzPole( "inputLastName", "nazwError", "nazwOk", nazwRegex );
}

function checkInputTel(){
    const telRegex = /^[1-9][0-9]{8}$/;
    return sprawdzPole( "inputTel", "telError", "telOk", telRegex );
}

function sprawdzPole( id, idError, idOk, regex ){
    if( !sprawdzRegex( id, regex ) ){
        $( '#' + id ).addClass( 'is-invalid' );
        $( '#' + idError ).removeClass( 'd-none' );
        $( '#' + id ).removeClass( 'is-valid' );
        $( '#' + idOk ).addClass( 'd-none' );
        return false;
    } else  {
        $( '#' + id ).removeClass('is-invalid' );
        $( '#' + idError ).addClass('d-none' );
        $( '#' + id ).addClass('is-valid' );
        $( '#' + idOk ).removeClass('d-none' );
        return true;
    }
}

function checkCountry(){
    if( checkMultiSelect( "kraj" ) == "" ){
        $( '#kraj' ).addClass( 'is-invalid' );
        $( '#krajError' ).removeClass( 'd-none' );
        $( '#kraj' ).removeClass( 'is-valid' );
        $( '#krajOk' ).addClass( 'd-none' );
        return false;
    } else {
        $( '#kraj' ).addClass( 'is-valid' );
        $( '#krajError' ).addClass( 'd-none' );
        $( '#kraj' ).removeClass( 'is-invalid' );
        $( '#krajOk' ).removeClass( 'd-none' );
        return true;
    }
}

function checkField(){
    if( checkCheckboxes( "dziedzina" ) == "" ){
        $( '#checkboxError' ).removeClass( 'd-none' );
        $( '#checkboxError' ).addClass( 'd-block' );
        $( '#checkboxOk' ).addClass( 'd-none' );
        $( '#checkboxOk' ).removeClass( 'd-block' );
        return false;
    } else {
        $( '#checkboxError' ).addClass( 'd-none' );
        $( '#checkboxError' ).removeClass( 'd-block' );
        $( '#checkboxOk' ).removeClass( 'd-none' );
        $( '#checkboxOk' ).addClass( 'd-block' );
        return true;
    }
}

function checkLevel(){
    if( !checkRadio( "poziom" ) ){
        $( '#radioError' ).removeClass( 'd-none' );
        $( '#radioError' ).addClass( 'd-block' );
        $( '#radioOk' ).addClass( 'd-none' );
        $( '#radioOk' ).removeClass( 'd-block' );
        return false;
    } else {
        $( '#radioError' ).addClass( 'd-none' );
        $( '#radioError' ).removeClass( 'd-block' );
        $( '#radioOk' ).removeClass( 'd-none' );
        $( '#radioOk' ).addClass( 'd-block' );
        return true;
    }
}

function checkText(){
    if( !sprawdzTextArea( "text" ) ){
        $( '#text' ).addClass( 'is-invalid' );
        $( '#text' ).removeClass( 'is-valid' );
        $( '#textError' ).removeClass( 'd-none' );
        $( '#textOk' ).addClass( 'd-none' );
        return false;
    } else {
        $( '#text' ).addClass( 'is-valid' );
        $( '#text' ).removeClass( 'is-invalid' );
        $( '#textError' ).addClass( 'd-none' );
        $( '#textOk' ).removeClass( 'd-none' );
        return true;
    }
}

document.addEventListener("DOMContentLoaded", function () {

    if( localStorage.length != 0 ){
        var div = document.getElementById("wczytajDane");
        var tresc = "";
        var dane = Object.keys(localStorage);

        tresc += '<label class="h5" for="exampleFormControlSelect2">Zapisane dane</label>'+
                        '<select class="form-control" id="dane">';
        for( var i = 0; i < localStorage.length; i++ ){
            tresc += '<option>' + dane[i] + '</option>';
        }
        tresc += '</select>' +
                '<button type="button" id="zapisz" class="btn btn-primary btn-sm m-1" >Zapisz dane osobowe</button>'    +
                '<button type="button" id="wczytaj" class="btn btn-primary btn-sm m-1" >Wczytaj dane osobowe</button>'  +
                '<button type="button" id="usun" class="btn btn-danger btn-sm m-1" >Usun dane osobowe</button>'         +
                '<button type="button" id="edytuj" class="btn btn-info btn-sm m-1" >Edytuj dane osobowe</button>';
        
        div.innerHTML = tresc;
    }


    var zapisz = document.getElementById("zapisz");
    zapisz.addEventListener('click', function () {
        var poprawne = true;

        if( !checkInputEmail() ) poprawne = false;
        if( !checkInputName() ) poprawne = false;
        if( !checkInputLastName() ) poprawne = false;
        if( !checkInputTel() ) poprawne = false;

        if( poprawne ){
            const dane = {
                tel: document.getElementById("inputTel").value,
                imie: document.getElementById("inputName").value,
                nazw: document.getElementById("inputLastName").value,
                email: document.getElementById("inputEmail").value
            };
        
            var item = JSON.parse( localStorage.getItem( dane.email ) );
            if( item === null ){
                localStorage.setItem( dane.email, JSON.stringify( dane ) );
                alert( "Poprawnie zapisano dane osobowe." );
                return;
            } else {
                alert( "Podane dane są już zapisane!" );
                return;
            }
        } else {
            alert("Uzupełnij dane aby je zapisać!");
        }
        
    },
        false);

    var wczytaj = document.getElementById( "wczytaj" );
    wczytaj.addEventListener( 'click', function () {
        var dane = checkMultiSelect( "dane" );
        if( dane === "" ){
            alert( "Wybierz dane które chcesz wczytac" );
            return;
        } else {
            var item = JSON.parse( localStorage.getItem( dane ) );
            document.getElementById( "inputEmail" ).value = item.email;
            document.getElementById( "inputName" ).value = item.imie;
            document.getElementById( "inputLastName" ).value = item.nazw;
            document.getElementById( "inputTel" ).value = item.tel;
            alert( "Poprawnie wczytano dane" );
            checkInputEmail();
            checkInputName();
            checkInputLastName();
            checkInputTel();
        }


    }, false);

    var usun = document.getElementById( "usun" );
    usun.addEventListener('click', function () {
        var dane = checkMultiSelect( "dane" );
        if( dane === "" ){
            alert( "Wybierz dane które chcesz usunąć" );
            return;
        } else {
            localStorage.removeItem( dane );
            alert( "Poprawnie usunięto dane" );
            window.location.reload(true);
        }
    }, false);

    var edytuj = document.getElementById( "edytuj" );
    edytuj.addEventListener('click', function () {
        var popup = $( "#popup" );
        popup.removeClass( 'd-none' );

        var dane = checkMultiSelect( "dane" );
        if( dane === "" ){
            alert( "Wybierz dane które chcesz wczytac" );
            return;
        } else {
            var item = JSON.parse( localStorage.getItem( dane ) );
            localStorage.removeItem( dane );
            document.getElementById( "popupEmail" ).value = item.email;
            document.getElementById( "popupName" ).value = item.imie;
            document.getElementById( "popupLastName" ).value = item.nazw;
            document.getElementById( "popupTel" ).value = item.tel;
            checkPopupEmail();
            checkPopupName();
            checkPopupLastName();
            checkPopupTel();
        }
    }, false);
});

function zapiszEdytowane(){
    var poprawne = true;
    if( !checkPopupEmail() ) poprawne = false;
    if( !checkPopupName() ) poprawne = false;
    if( !checkPopupLastName() ) poprawne = false;
    if( !checkPopupTel() ) poprawne = false;

    if( poprawne ){
        const dane = {
            tel: document.getElementById("popupTel").value,
            imie: document.getElementById("popupName").value,
            nazw: document.getElementById("popupLastName").value,
            email: document.getElementById("popupEmail").value
        };
    
        var item = JSON.parse( localStorage.getItem( dane.email ) );
        if( item === null ){
            localStorage.setItem( dane.email, JSON.stringify( dane ) );
            alert( "Poprawnie zapisano dane osobowe." );
            return true;
        } else {
            alert( "Podane dane są już zapisane!" );
            return true;
        }
    }
    return poprawne;
}

function checkPopupEmail(){
    const emailRegex = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    return sprawdzPole( "popupEmail", "emailPopupError", "emailPopupOk", emailRegex );
}

function checkPopupName(){
    const imieRegex = /^\s*^[A-ZŁŹŚĆŻ][a-złźśćżęąń]+(?:\s+[A-ZŁŹŚĆŻ][a-złźśćżęąń]+)*\s*$/;
    return sprawdzPole( "popupName", "imiePopupError", "imiePopupOk", imieRegex );
}

function checkPopupLastName(){
    const nazwRegex =  /^[A-ZŁŹŚĆŻ][a-złźśćżęąń]{2,20}(-[A-ZŁŹŚĆŻ][a-złźśćżęąń]{2,20})?$/;
    return sprawdzPole( "popupLastName", "nazwPopupError", "nazwPopupOk", nazwRegex );
}

function checkPopupTel(){
    const telRegex = /^[1-9][0-9]{8}$/;
    return sprawdzPole( "popupTel", "telPopupError", "telPopupOk", telRegex );
}