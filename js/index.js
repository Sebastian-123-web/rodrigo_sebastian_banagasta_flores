
// CONFIGURACION DE ESTRELLAS EN LA PANTALLA
const star = document.getElementsByClassName('universe')

const stars = Object.values(star[0].children)

console.log(screen.width)
console.log(document.documentElement.scrollHeight)

stars.forEach((e,i) => {
    stars[i].style.top = `${Math.ceil(Math.random() * (screen.width - 20))}px`
    stars[i].style.left = `${Math.ceil(Math.random() * (document.documentElement.scrollWidth))}px`
})
