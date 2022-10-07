const templateCard = document.getElementById('template-card').content
const usuariosHTML = document.getElementById('usuarios')
const fragment = document.createDocumentFragment()

let usuarios =[]

document.addEventListener('DOMContentLoaded', () => {
obtenerUsuarios()
})

const pintarCards = () => {

  usuarios.forEach(user => {

    templateCard.querySelector('.card-header').textContent = user.name
    templateCard.querySelectorAll('h7')[0].textContent = user.email
    templateCard.querySelectorAll('h7')[1].textContent = user.phone
    templateCard.querySelectorAll('h7')[2].textContent = user.username
    templateCard.querySelectorAll('h7')[3].textContent = user.website
    templateCard.querySelectorAll('h7')[4].textContent = user.address.street
    templateCard.querySelectorAll('h7')[5].textContent = user.address.suite
    templateCard.querySelectorAll('h7')[6].textContent = user.address.city
    templateCard.querySelectorAll('h7')[7].textContent = user.address.zipcode
    templateCard.querySelectorAll('h7')[8].textContent = user.company.name
    
    
    templateCard.querySelector('.btn-primary').dataset.id = user.id
    const clone = templateCard.cloneNode(true)

    fragment.appendChild(clone)
    })

    usuariosHTML.appendChild(fragment)

}

function obtenerUsuarios(){
  fetch('https://jsonplaceholder.typicode.com/users')

  .then(async(data) => {
    usuarios = await data.json()
    pintarCards()
  })
  .catch(error => console.log(error))
}