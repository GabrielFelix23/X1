//Botão N Jogadores
function telaNJogadores(){
    $('#pronto').hide()
    $('#input3').hide()
    $('#input4').hide()
    $('#clickMenos').hide()
}
//Gerar as duplas
function prontoNJogadores(){   
    var nome1 = document.querySelector('#nome1')
    var nome2 = document.querySelector('#nome2')
    var nome3 = document.querySelector('#nome3')
    var nome4 = document.querySelector('#nome4')
    
    if(nome1.value.length == 0 || nome2.value.length == 0 || nome3.value.length == 0 || nome4.value.length == 0){ //retirar espaços em branco da string
        alert("[AVISO] Existe campos vazios.");
    }
    else if(nome1.value === nome2.value ||nome2.value == nome1.value || nome3.value === nome4.value ||nome4.value == nome3.value){
        alert("Não pode apelidos iguais.")
    }
    else{        
        for(var i = 1; i <= 6; i++){
            var nomeJogadores = [
                naoIdentificado = String(nome1.value),

                n1 = String(nome1.value),
                n2 = String(nome2.value),
                n3 = String(nome3.value),
                n4 = String(nome4.value)
            ]
            var nome = nomeJogadores[Math.ceil(Math.random() * (nomeJogadores.length - 1))];
            alert(nome)
        }
        $('#pronto').show()
    }
}
//tela dos times
function gerarTimes(){
    window.open('times.html')
}
//+2 jogador
function maisDois(){
    const click = document.getElementById('#click')
   
    if(click != false){
        $('#input3').show()
        $('#input4').show()
    }
    $('#click').hide()
    $('#clickMenos').show()
}
function menosDois(){
    $('#input3').hide()
    $('#input4').hide()
    $('#clickMenos').hide()
    $('#click').show()
}

    



