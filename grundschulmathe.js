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