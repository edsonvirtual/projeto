// const carousel = new bootstrap.Carousel('#myCarousel')

// const myCarousel = document.getElementById('myCarousel')

// myCarousel.addEventListener('slide.bs.carousel', event => {
//   // do something...
// })

let usuarios = []
if(localStorage.getItem('armazenaUsuarios')){
  usuarios = JSON.parse(localStorage.getItem('armazenaUsuarios'))
}

function cadastrar(){
  // let declara variavel
  let guardaNome = document.getElementById('nome').value
  let guardaSenha = document.getElementById('senha').value
  let usuario = {nome: guardaNome, senha: guardaSenha}
  if(guardaNome.length >=3){
  usuarios.push(usuario)
  localStorage.setItem('armazenaUsuarios', JSON.stringify(usuarios))
  alert("Usuario cadastrado com sucesso!")
  location.href = 'home.html'
  console.log(usuarios)
  }else{
    alert('Cadastro invalido: Tente novamnete')
  }
  console.log(usuarios)
}

usuarios = [{nome:'',senha:''}]
if (localStorage.getItem('armazenaUsuarios')) {
    usuarios = JSON.parse(localStorage.getItem('armazenaUsuarios'))
}
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

// let contador = 0
// if(localStorage.getItem('armazenaContador')){
//     contador = localStorage.getItem('armazenaContador')
// }
// setInterval(()=>{
//     document.body.innerHTML = contador
//     localStorage.setItem('armazenaContador', contador)
//     contador++
// }, 1000)