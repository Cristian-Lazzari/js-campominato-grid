const grid100 = document.querySelector(".grid");
grid100.classList.add('grid-100')
for (let i = 1; i < 101; i++){
    grid100.innerHTML+= `<div class="box">${i}</div>`
    console.log(i)
}