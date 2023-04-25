const level = document.querySelector("#level");
const button = document.querySelector(".btn");
button.addEventListener('click',
function(){
    if(level.value == 'easy'){
        
        
        const grid100 = document.querySelector(".grid");
        grid100.innerHTML= ''
        grid100.classList.add('grid-100')
        for (let i = 1; i < 101; i++){
            grid100.innerHTML+= `<div class="box">${i}</div>`
            console.log(i)
        }
    
    }
    else if (level.value == 'normal') {
        
        const grid100 = document.querySelector(".grid");
        grid100.innerHTML= ''
        grid100.classList.add('grid-81')
        for (let i = 1; i < 82; i++){
            grid100.innerHTML+= `<div class="box">${i}</div>`
            console.log(i)
        }
    } else {
        
        const grid100 = document.querySelector(".grid");
        grid100.innerHTML= ''
        grid100.classList.add('grid-49')
        for (let i = 1; i < 50; i++){
            grid100.innerHTML+= `<div class="box">${i}</div>`
            console.log(i)
        }
    }

})
function magicClick(){
    
}

