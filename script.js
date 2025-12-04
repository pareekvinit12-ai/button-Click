let button = document.querySelectorAll(".btn");
let para = document.querySelector(".para");

// button.forEach((btn, i) =>{
//     btn.addEventListener("click", ()=>{
//         para.textContent = `buttan click ${i}`
//     })
// })

for(let i = 0; i<= button.length; i++){
    button[i].addEventListener("click", ()=>{
        para.textContent = `buttan click ${i}`
    })
}