var input = document.getElementById('password')
var mensagem = document.getElementById('mensagem')
var uppercase = document.getElementById('uppercase')
var simbolos = document.getElementById('simbolos')
var numeros = document.getElementById('numeros')
var caracteres = document.getElementById('caracteres')

// Quando clicar no input do password aparece a caixa de mensagem.

input.onfocus = function(){
    document.getElementById("mensagem").style.display = 'block';
}
// Quando sair do input do password a caixa de mensagem desaparece.

input.onblur = function(){
    document.getElementById('mensagem').style.display = 'none';
    uppercase.style.color = 'white'
    numeros.style.color = 'white'
    simbolos.style.color = 'white'
    caracteres.style.color = 'white'
}

// Condicionais para verificar se a senha tem letras maiúsculas, números, símbolos e se tem mais de 8 caracteres.

input.onkeyup = function(){
    var letrasMaiusculas =  /[A-Z]/g;
    if(input.value.match(letrasMaiusculas)){
        uppercase.style.color = 'lightgreen'
    }
    else{
        uppercase.style.color = 'red'
    }

    var numbers = /[0-9]/g;
    if(input.value.match(numbers)){
        numeros.style.color = 'lightgreen'
    }
    else{
        numeros.style.color = 'red'
    }
    var simb = /[?=./;,@#$%*!+-><:'"_¨¨&()ºª°§{}|]/g
    if(input.value.match(simb)){
        simbolos.style.color = 'lightgreen'
    }
    else{
        simbolos.style.color = 'red'
    }
    if(input.value.length >= 8 ){
        caracteres.style.color = 'lightgreen'
    }
    else{
        caracteres.style.color = 'red'
    }

}