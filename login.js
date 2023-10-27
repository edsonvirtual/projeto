function login(){
    let guardaNome = document.getElementById('nome').value
    let guardaSenha = document.getElementById('senha').value
    if(localizar(guardaNome, guardaSenha)==-1){
        alert('usuário inválido')
    }else{
        alert('Seja bem-vind@!')
        location.href='welcome.html'
    }
  }
  
  function localizar(nome, senha){
    let indice = usuarios.findIndex((e)=>{
        return e.nome=nome && e.senha==senha
    })
    return indice
  }