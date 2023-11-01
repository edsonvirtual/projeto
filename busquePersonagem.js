let img=document.querySelector('img')
let p = document.querySelector('p')
let btn = document.querySelectorAll('input')
let lista

fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
        .then(response => response.json())
        .then(data => {
            lista = data
            lista.forEach((e)=>{
                let p = document.createElement('p')
                p.className='nome'
                p.innerHTML = e.name
                let img = document.createElement('img')
                let div = document.createElement('div')
                div.className='card-list'
                img.src = e.images.lg
                img.style.width = '350px'
                document.querySelector('.list-container').appendChild(div)
                div.appendChild(img)
                div.appendChild(p)
            })
        })

function buscar() {
    let nome = document.querySelector('input#nome').value
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
        .then(response => response.json())
        .then(data => {
            let dados = data
            
            console.log(dados)
            dados.forEach(e => {
                if(e.name.toLowerCase() == nome){
                    console.log(e.name)
                    img.src = e.images.lg
                    p.innerHTML = e.name
                    console.log(e.images.lg)
                }
            });
        })
        .catch(err => console.log(err));
}

btn[0].addEventListener('keypress',(e)=>{
    console.log('oi')
    if(e.key == "Enter"){
        buscar()
    }
})

fetch('https://api.jikan.moe/v4/anime?q=narutp&sfw').then(r=>r.json()).then(data=>console.log(data.data[0].title)).then(error=>console.log(error))





