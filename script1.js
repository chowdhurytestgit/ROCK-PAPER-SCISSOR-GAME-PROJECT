let btn1 = document.querySelector("#d1")
btn1.addEventListener("mouseover",()=>{
       btn1.classList.add("hello")
})

btn1.addEventListener("mouseout",()=>{
    btn1.classList.remove("hello")
})

let btn2 = document.querySelector("#d2")
btn2.addEventListener("mouseover",()=>{
       btn2.classList.add("hello")
})

btn2.addEventListener("mouseout",()=>{
    btn2.classList.remove("hello")
})


let btn3 = document.querySelector("#d3")
btn3.addEventListener("mouseover",()=>{
       btn3.classList.add("hello")
})

btn3.addEventListener("mouseout",()=>{
    btn3.classList.remove("hello")
})
let bt = document.querySelector("#bt");
let scoreme = document.querySelector("#scoreme");
let scorecom =document.querySelector("#scorecom");
let rst = document.querySelector("#rst")
let countme = 0;
let countcom = 0;
let win = ["Rock","Paper","Scissor"]
let choice;
//console.log(choice)

btn1.addEventListener("click",()=>{
    choice = win[Math.floor(Math.random() * 3)]
    if(choice === "Paper"){
        bt.innerText="You lost..its Paper"
        countcom++;
    }
    else if(choice === "Scissor")
    {
        bt.innerText="You won..its Scissor"
        countme++;
    }
    else
       bt.innerText="Its draw.. its Rock"
    scoreme.innerText=countme
    scorecom.innerText=countcom
})

btn2.addEventListener("click",()=>{
    choice = win[Math.floor(Math.random() * 3)]
    if(choice === "Scissor"){
        bt.innerText="You lost..its Scissor"
        countcom++;
    }
    else if(choice === "Rock")
    {
        bt.innerText="You won..its Rock"
        countme++;
    }
    else
       bt.innerText="Its draw.. its Paper"
    scoreme.innerText=countme
    scorecom.innerText=countcom
})

btn3.addEventListener("click",()=>{
    choice = win[Math.floor(Math.random() * 3)]
    if(choice === "Rock"){
        bt.innerText="You lost..its Rock"
        countcom++;
    }
    else if(choice === "Paper")
    {
        bt.innerText="You won..its Paper"
        countme++
    }
    else
       bt.innerText="Its draw.. its Scissor"
    scoreme.innerText=countme
    scorecom.innerText=countcom
})

rst.addEventListener("click",()=>{
    bt.innerText="Pick your move"
    countcom=0
    countme=0;
    scorecom.innerText=countcom
    scoreme.innerText=countme
})