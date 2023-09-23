const url = 'https://jsonplaceholder.typicode.com/users' //Traemos todos los elementos del formulario
const form = document.getElementById('form')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const nacimiento = document.getElementById('nacimiento')


form.addEventListener('submit', (event) => {  //Agregamos el event listener submit para cargar los valores de las variables cuando se envia el form
    event.preventDefault() //evita que se recargue el formulario
    let name = nombre.value
    let lastname = apellido.value
    let birthdate = nacimiento.value

    fetch(url, { //realizamos el fetch con el metodo post para enviar los datos del formulario al servidor
        method: 'POST',
        body: JSON.stringify({
            name,
            lastname,
            birthdate,
        }),        
        headers: {
            'Content-Type': 'aplication/json',
        }
    })
.then((response)=>response.json())
.then((data)=>{console.log(data)
})
.catch((error)=>alert(error))
})


