function calcular(event) {
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let contentResult1 = document.getElementById("content-result1");
    let gasolinaSpan = document.getElementById("gasolina-result");
    let alcoolSpan = document.getElementById("alcool-result")

    /* 
    calculo: alcool / gasolina
    e se o resultado for menor que 0.7 compensa usar alcool
    */

    let calculo = (alcoolInput / gasolinaInput);

    if(calculo < 0.7){
        // aqui compesa usar alcool
        
        contentResult.classList.remove("hide")
        alcoolSpan.innerHTML = "O Álcool custa R$ " + alcoolInput;
    }else{
        // aqui compesa usar gasolina
        
        contentResult1.classList.remove("hide")
        gasolinaSpan.innerHTML = "A Gasolina custa R$ " + gasolinaInput;
    }

    

    
}