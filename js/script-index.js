//Botão jogar
function jogar(){
    $('#pronto').hide()
}

//Gerar as duplas
function gerarDupla(){  
    var nome1 = document.querySelector('#nome1')
    var nome2 = document.querySelector('#nome2')
    var nome3 = document.querySelector('#nome3')
    var nome4 = document.querySelector('#nome4')
    
    if(!nome1.value.length || typeof nome1.value.length == undefined || nome1.value.length == null){
        Swal.fire("[AVISO] Existe campos vazios.");
    }
    else if(!nome2.value.length || typeof nome2.value.length == undefined || nome2.value.length == null){
        Swal.fire("[AVISO] Existe campos vazios.");
    }
    else if(!nome3.value.length || typeof nome3.value.length == undefined || nome3.value.length == null){
        Swal.fire("[AVISO] Existe campos vazios.");
    }
    else if(!nome4.value.length || typeof nome4.value.length == undefined || nome4.value.length == null){
        Swal.fire("[AVISO] Existe campos vazios.");
    }
    else if(nome1 == nome2 || nome1 == nome3 || nome1 == nome4 ||
        nome2 == nome1| nome2 == nome3 || nome2 == nome4 ||
        nome3 == nome1 || nome3 == nome2 || nome3 == nome4 ||
        nome4 == nome1 || nome4 == nome2 || nome4 == nome3){
        Swal.fire("Não pode apelidos iguais.")
    }
    else{   
        const nomejogador = [ 
            n1 = nome1.value,
            n2 = nome2.value,
            n3 = nome3.value,
            n4 = nome4.value,
        ]
        let jogador = []

        for(let i=0; i < 4; i++){
            const nomeAleatorio = Math.floor(Math.random() * nomejogador.length)
            if(!jogador.includes(nomejogador[nomeAleatorio])){
                jogador.push(nomejogador[nomeAleatorio])
            }
            else{
                i--
            }
            alert(jogador[i])
        }
        $('#pronto').show()
    }
}