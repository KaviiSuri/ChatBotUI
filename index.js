const addStateBtn = document.getElementById('add-state')
const proceedBtn = document.getElementById('proceed')
const states = []

addStateBtn.addEventListener('click', () => {
    const newState = new State(states.length + 1)
    states.push(newState)
})

proceedBtn.addEventListener('click', () => {
    const data = {}
    states.forEach((S) => {
        data[`S${S.Sindex}`] = S.extractData()
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