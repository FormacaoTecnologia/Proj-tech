
//Aqui eu criei a função validar.
function validar() {
    //Depois, chamei os elementos por id.
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var genero = document.getElementById("genero");
    //Aqui utilizei condicionais se os campos estiverem vazios, utilizando posteriormente alertas de erro. 
    if (nome.value == "") {
        alert("nome não informado");
        //Aqui dei foco nos elementos e usei um retorno para parar a execução  
        nome.focus();
        return;
    }
    if (email.value == "") {
        alert("email não informado");
        email.focus();
        return;
    }
    if (genero.value == "") {
        alert("gênero não informado");
        genero.focus();
        return;
    }
    //Aqui um alerta caso o formulário seja preenchido corretamente e o comando para submeter o formulário.
    alert("formulario enviado com sucesso!");
    //formulario.submit();               
}