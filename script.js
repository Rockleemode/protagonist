const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");
const slideLength = right.querySelectorAll("div").length

let active = 0;

left.style.top = `-${(slideLength-1)*100}vh`

upBtn.addEventListener("click",() => change("up"))
downBtn.addEventListener("click",() => change('down'))   

const change = (dir) =>{
    const height = container.clientHeight
    if (dir == "up"){
            active++
            if(active > slideLength -  1){
                active = 0 
            }
         } else if (dir == 'down') {
              active--
            }
            if(active < 0){
                active = slideLength - 1;
    }

    right.style.transform = `translateY(-${active * height}px)`
    left.style.transform = `translateY(${active * height}px)`
            
}

