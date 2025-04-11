class Task {
    constructor(name, description){
        this.name = name
        this.description = description
        this.status = false
    }

    finishTask() {
        this.status = true
    }
}

const tasks = []

function createTask(name, description) {
    const task = new Task("name", "description")
    listTasks.push(task)
}

let filterTasks = (name) => {
    const filter = listTasks.filter(taks => taks.name === name ) 
    return filter
}

const listTasks = () => {
    const ul = document.getElementById("lista")
    ul.innerHTML = ""

    tasks.forEach((liTask) => {
        const liTask = document.createElement('li')
        liTask.textontent = `${liTask.name}: ${liTask.description}`;
        ul.appendChild(liTask);
    })
}

