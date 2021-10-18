function calcularnota() {
    var nav1 = parseFloat(document.getElementById("av1").value);
    var nav2 = parseFloat(document.getElementById("av2").value);
    var nav3 = parseFloat(document.getElementById("av3").value);
    
    var notaparcial, notafinal;
    
    notaparcial = (nav1 + nav2)/2;
    notafinal = (notaparcial + nav3)/2;

    if (notaparcial >= 4) {
        if (notafinal >= 5) {
            document.getElementsByTagName("p")[0].innerHTML = `Aluno aprovado com <br>nota final: <span id="notaok">${notafinal.toFixed(1)}</span>`;
        } else {
            document.getElementsByTagName("p")[0].innerHTML = `Aluno reprovado com <br>nota final: <span id="notaruim">${notafinal.toFixed(1)}</span>`;
        }
    } else {
        document.getElementsByTagName("p")[0].innerHTML = `<span id="notaruim">Aluno reprovado inapto de fazer AV3.</span>`;
    }
    //NF = [(AV1 + AV2)/2 + AV3]/2

    document.getElementById("alert").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementsByTagName("main")[0].style.filter = "blur(3px)";
    for (let i = 0; i < 4; i++)
    document.getElementsByTagName("h1")[i].style.filter = "blur(3px)";

function fechar() {
    document.getElementById("alert").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementsByTagName("main")[0].style.filter = "none";
    for (let i = 0; i < 4; i++)
    document.getElementsByTagName("h1")[i].style.filter = "none";
}
