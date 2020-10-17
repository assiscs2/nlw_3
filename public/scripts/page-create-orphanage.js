// create map
const map = L.map("mapid").setView([-27.2152821,-49.6492667], 14);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// create icon 

const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,48],
})

let marker;

// Create and Add marker

map.on('click', function(event) {  

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove previous icon
    marker && map.removeLayer(marker)

    // add icon Layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)
})

// adicionar o campo de fotos

function addPhotoField() {
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')
    // Pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Realizar o clone ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // Verificar se o campo está vazio antes de adicionar um novo campo
    const input = newFieldContainer.children[0]

    if (input.value == ""){
        return
    }
    //Limpar o campo antes de adicionar ao container de images
    newFieldContainer.children[0].value = ""
    // Adicionar o clone ao container de imagens 
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    if (fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""

        return
    }

    //Deletar o campo
    span.parentNode.remove();
}

// Selecionar sim e não

function toggleSelect() {

    // Retirar a classe .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })
    // Colocar a classe .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // Pegar o botão clicados



    // Atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
    // Verificar se é sim ou não



}