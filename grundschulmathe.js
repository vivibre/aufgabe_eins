alert('Grundschulmathe');

while(i != 5){
    const a = Math.floor(Math.random() * 21);
    const b = Math.floor(Math.random() * 21);

    let ergebnisAddition = prompt("Wie viel ist " + a + " + " + b + "?");
    console.log(ergebnisAddition);
    document.write(a + " + " + b + " = " + ergebnisAddition + "<br>");

        if (a + b == ergebnisAddition) {
            punkteAddition = punkteAddition + 1;
            alert("Richitg gerechnet! Ihr Punktestand: " + punkteAddition + "/5");
        }
        else {
            alert("Falsch gerechnet! Ihr Punktestand: " + punkteAddition + "/5");
        }

    i++;
}

//Subtrktions-Level erreicht
var j = 0;
var punkteSubtraktion = 0;

if(punkteAddition >= 4){

    while(j != 5){
        var c = Math.floor(Math.random() * 21);
        var d = Math.floor(Math.random() * 21);
        
            if (c >= d) {
                let ergebnisSubtraktion = prompt("Wie viel ist " + c + " - " + d + "?");
                console.log(ergebnisSubtraktion)
                document.write(c + " - " + d + " = " + ergebnisSubtraktion + "<br>");

                if(c - d == ergebnisSubtraktion){
                    punkteSubtraktion = punkteSubtraktion + 1;
                    alert("Richitg gerechnet! Neuer Punktestand: " + punkteSubtraktion + "/5");
                }
                else {
                alert("Falsch gerechnet! Ihr Punktestand: " + punkteSubtraktion + "/5");
                }
            }
            
            else {
                let ergebnisSubtraktion = prompt("Wie viel ist " + d + " - " + c + "?");
                console.log(ergebnisSubtraktion)
                document.write(d + " - " + c + " = " + ergebnisSubtraktion + "<br>");

                if(d - c == ergebnisSubtraktion){
                    punkteSubtraktion = punkteSubtraktion + 1;
                    alert("Richitg gerechnet! Neuer Punktestand: " + punkteSubtraktion + "/5");
                }
                else {
                alert("Falsch gerechnet! Ihr Punktestand: " + punkteSubtraktion + "/5");
                }
            }
        
        j++;
    }
}

//Subtraktions-Level nicht errreicht
if(punkteAddition < 4){
    alert("Sie haben es nicht in das Subtraktion-Level geschafft!");
    console.log("Sie haben es nicht in das Subtraktions-Level geschafft!");
}

//Multiplikationa-Level errericht
var k = 0;
var punkteMultiplikation = 0;

if(punkteSubtraktion >= 4){

    while(k != 5){
    var e = Math.floor(Math.random() * 21);
    var f = Math.floor(Math.random() * 21);
        
        let ergebnisMultiplikation = prompt("Wie viel ist " + e + " x " + f + "?");
        console.log(ergebnisMultiplikation)
        document.write(e + " x " + f + " = " + ergebnisMultiplikation + "<br>");

        if(e * f == ergebnisMultiplikation){
            punkteMultiplikation = punkteMultiplikation + 1;
            alert("Richitg gerechnet! Neuer Punktestand: " + punkteMultiplikation + "/5");
        }
        else {
             alert("Falsch gerechnet! Ihr Punktestand: " + punkteMultiplikation + "/5");
        }
        k++;
    }
}

//Multiplikations-Level nicht errreicht
if(punkteSubtraktion < 4){
    alert("Sie haben es nicht in das Multiplikations-Level geschafft!");
    console.log("Sie haben es nicht in das Multiplikations-Level geschafft!");
}

//Divisions-Level erreicht
var l = 0;
var punkteDivision = 0;

if(punkteMultiplikation >= 4) {

    alert("Divisions-Level: Ergbnis sind nur ganze Zahlen")

    while(l != 5){
        var g =Math.floor(Math.random() * 21);
        var h =Math.floor(Math.random() * 21);


        if (g >= h) {
            let ergebnisDivision = prompt("Wie viel ist " + g + " : " + h + "?");
            ergebnisDivision = Math.floor(ergebnisDivision);
            console.log(ergebnisDivision)
            document.write(g + " : " + h + " = " + ergebnisDivision + "<br>");

            if((g / h) - (g % h) == ergebnisDivision ){
                punkteDivision = punkteDivision + 1;
                alert("Richitg gerechnet! Neuer Punktestand: " + punkteDivision + "/5");
            }
            else {
            alert("Falsch gerechnet! Ihr Punktestand: " + punkteDivision + "/5");
            }
        }
        
        else {
            let ergebnisDivision = prompt("Wie viel ist " + h * g + " : " + g + "?");
            console.log(ergebnisDivision)
            document.write( h * g + " : " + g + " = " + ergebnisDivision + "<br>");

            if((g * h) / g  == ergebnisDivision){
                punkteDivision = punkteDivision + 1;
                alert("Richitg gerechnet! Neuer Punktestand: " + punkteDivision + "/5");
            }
            else {
            alert("Falsch gerechnet! Ihr Punktestand: " + punkteDivision + "/5");
            }
        }
    
    l++;

    }
}

//Divisions-Level nicht errreicht
if (punkteMultiplikation < 4){
    alert("Sie haben es nicht in das Divisions-Level geschafft!");
    console.log("Sie haben es nicht in das Divisions-Level geschafft!");
}