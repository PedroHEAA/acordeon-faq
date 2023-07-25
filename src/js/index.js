//Ao CLICAR em uma das PERGUNTAS eu preciso Mostrar a RESPOSTA e TROCAR a COR da SETA

//1- Pegue os elementos
const doubts = document.querySelectorAll(".doubt")

doubts.forEach((doubt)=>{
    doubt.addEventListener("click", ()=>{
        const activatedDoubt = document.querySelector(".activated")
        doubt.classList.add("activated")
        activatedDoubt.classList.remove("activated")
    })
})















// const doubts = document.querySelectorAll(".doubt")
// console.log(doubts)

// doubts.forEach(doubt =>{
//     doubt.addEventListener("click", ()=>{
//         const activatedDoubt = document.querySelector(".activated")
//         doubt.classList.add("activated")
//         activatedDoubt.classList.remove("activated")
        
//         //Teacher resolution
//         // if(activatedDoubt) {
//         //     activatedDoubt.classList.remove("activated")
//         // }
//         // doubt.classList.add("activated")
        
//     })
// })

