const addStateBtn = document.getElementById('add-state')
const proceedBtn = document.getElementById('proceed')
const states = []

addStateBtn.addEventListener('click', () => {
    const newState = new State(states.length)
    states.push(newState)
})

proceedBtn.addEventListener('click', () => {
    const data = {}
    states.forEach((S, i) => {
        data[`S${i}`] = S.extractData()
    })
    console.log(data)
})

//detect Escape key press
document.addEventListener("keydown", function(event) {
    if(event.key === 'Escape'){
       document.getElementById('form-modal').style.display = 'none'
   }
});

// window.onload = () => {

// }