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