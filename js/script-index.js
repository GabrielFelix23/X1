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
        var nomeJogadores = [
            naoIdentificado = String(nome1.value),
           
            n1 = nome1.value,
            n2 = nome2.value,
            n3 = nome3.value,
            n4 = nome4.value,
        ]
        var nome1 = nomeJogadores[Math.ceil(Math.random() * (nomeJogadores.length - 1))]
        var nome2 = nomeJogadores[Math.ceil(Math.random() * (nomeJogadores.length - 1))]
        var nome3 = nomeJogadores[Math.ceil(Math.random() * (nomeJogadores.length - 1))]
        var nome4 = nomeJogadores[Math.ceil(Math.random() * (nomeJogadores.length - 1))]
        
        Swal.fire("Duplas:<br>" + nome1 + " e " + nome2 + "\nX\n" + nome3 + " e " + nome4)

        /*if(nome1 === nome2){
            return nome1, nome3 
        }
        else if(nome3 === nome1){
            return nome3, nome4 
        }
        else if(nome4 === nome3){
            return nome4, nome2 
        }
        else if(nome2 === nome3){
            return nome2, nome1
        }
        else if(nome1 === nome4){
            return nome1, nome2
        }
        else if(nome2 === nome4){
            return nome2, nome3
        }
        else{   
            Swal.fire("Duplas:<br>" + nome1 + " e " + nome2 + "\nX\n" + nome3 + " e " + nome4)

        }*/
        $('#pronto').show()
    }
}