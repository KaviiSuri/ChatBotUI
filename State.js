class State {
    constructor(Sindex) {
        this.Sindex = Sindex;
        this.id = `S${Sindex}`
        this.transitions = [] // array for transition objects

        // refernce to html element in order handle the rendering
        // of state and transitiosn
        this.el = document.createElement('div')
        this.el.id = this.id;
        this.el.classList.add('state')


        const header = document.createElement('div')
        header.classList.add('state-head')
        const heading = document.createElement('h1')
        heading.innerText = `State ${this.Sindex}`
        header.appendChild(heading)
        
        const addTransBtn = document.createElement('button')
        addTransBtn.classList.add('add-trans-btn') 
        addTransBtn.innerText = 'Add Transition'
        addTransBtn.addEventListener('click', this.addTransition)
        header.appendChild(addTransBtn)
        
        this.el.appendChild(header)
        // place into the states div
        document.getElementById('states').appendChild(this.el)
    }
    addTransition = () => {
        const newTrans = new Transition(this.Sindex, this.transitions.length + 1)
        this.transitions.push(newTrans)
        this.el.appendChild(newTrans.render())   
    }

    extractData() {
        let data ={}
        this.transitions.forEach((T) => {
            data[`T${T.Tindex}`] = T.extractData()
        })
        return data
    }
}