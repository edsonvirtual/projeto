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
  usuarios.push(usuario)
  localStorage.setItem('armazenaUsuarios', JSON.stringify(usuarios))
  alert("Usuario cadastrado com sucesso!")
  location.href = 'home.html'
  console.log(usuarios)

}

// let contador = 0
// if(localStorage.getItem('armzaneaContador')){
//   contador = localStorage.getItem('armzaneaContador')
// }
// setInterval(()=>{
//   document.body.innerHTML = contador
//   localStorage.setItem('contador', contador)
//   contador++
// }, 1000)
