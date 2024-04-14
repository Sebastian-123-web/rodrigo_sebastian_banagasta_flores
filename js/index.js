
// CONFIGURACION DE ESTRELLAS EN LA PANTALLA
const star = document.getElementsByClassName('universe')

const t_monitor = document.documentElement.scrollHeight - 150
const t_monitor_medio = t_monitor / 2
const l_monitor = document.documentElement.scrollWidth - 150
const l_monitor_medio = l_monitor / 2

let l_random = Number
let t_random = Number
let valor_scroll = String
let stars = []
for (let i = 1; i <= 130; i++) {
    l_random = Math.random() * l_monitor
    t_random = Math.random() * t_monitor
    if(l_random>l_monitor_medio && t_random>t_monitor_medio){valor_scroll = 'star-scroll-right-top'}
    else if(l_random>l_monitor_medio && t_random<t_monitor_medio){valor_scroll = 'star-scroll-right-bottom'}
    else if(l_random<l_monitor_medio && t_random>t_monitor_medio){valor_scroll = 'star-scroll-left-top'}
    else if(l_random<l_monitor_medio && t_random<t_monitor_medio){valor_scroll = 'star-scroll-left-bottom'}

    stars += `
                <span 
                    style="
                        top:${Math.ceil(Math.random() * t_monitor)}px;
                        left:${Math.ceil(l_random)}px;
                        animation-name: ${ valor_scroll };
                    " 
                    class="color_star${Math.ceil(Math.random()*3)}">
                </span>
            ` 
}
star[0].innerHTML = stars