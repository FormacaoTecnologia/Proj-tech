function enviarDados() {
  function validmail(email) {
      if (email.indexOf("@") == -1 || email == "" || email.indexOf(".") == - 1) {
          alert("Email incorreto, preencha corretamente o campo.");
          email.focus();
          return false;
      }
  }
  var nome = document.getElementById("nome").value;
  if (nome.length < 3) {
      alert("O nome deve ter no mínimo 3 letras.");
      nome.focus();
      return false;
  }
  var recebeEmail = validmail(document.getElementById("email").value);
}