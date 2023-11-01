function buscar(){
    let imagem = document.querySelector('img')
    let p = document.querySelector('p')
    let texto = document.querySelector('#anime').value
    fetch(`https://api.jikan.moe/v4/anime?q=$(texto)&sfw`)
    .then(response => response.json())
    .then(dados => {
        p.innerHTML = dados.data[0].tittle
        imagem.src = dados.data[0].images.webp.large_image_url
    })
    .catch(e=>console.log(e))

}



