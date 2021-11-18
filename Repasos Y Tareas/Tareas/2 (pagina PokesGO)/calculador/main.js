    function res(){
        var atq = document.getElementById("atq").value;

        var def = document.getElementById("def").value;

        var ps = document.getElementById("ps").value;

        var rest = (( parseInt(atq) + parseInt(def) + parseInt(ps) ) * 100) / 45;

        var rest = Math.ceil(rest);

        // El "document.getElementById()" sirve para llamar un id de html //
        // El "parseInt()" sirve para convertir en entero un numero //
        // El "Math.ceil()" sirve para redondear para arriba //

        if(rest <= 100) {

            document.getElementById("rf").innerHTML="Resultado: " + rest + "%";

        } else {

            document.getElementById("rf").innerHTML="Ingresaste numeros incorrectos. Por favor intentalo de nuevo, pero esta vez ingresando numeros entre 0-15.";
        }
    
    } 