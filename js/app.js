const nickInput = document.getElementById('nick')
const tamanoInput = document.getElementById('tamano')
const formEntrada = document.getElementById('form_entrada')

function comprobarFormulario(event){
    if(nickInput.value.match(/\d\w/g)){
        console.log('No hay nick')
        event.preventDefault()
    }
}

formEntrada.addEventListener('submit', comprobarFormulario())