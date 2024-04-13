
// CONFIGURACION DE ESTRELLAS EN LA PANTALLA
const star = document.getElementsByClassName('universe')

const stars = Object.values(star[0].children)

console.log(screen.width)
console.log(document.documentElement.scrollHeight)

const t_monitor = document.documentElement.scrollHeight
const l_monitor = document.documentElement.scrollWidth - 10

stars.forEach((e,i) => {
    stars[i].style.top = `${Math.ceil(Math.random() * t_monitor)}px`
    stars[i].style.left = `${Math.ceil(Math.random() * l_monitor)}px`
})
