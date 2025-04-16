class Task {
    constructor(name, description){
        this.name = name
        this.description = description
        this.status = false
    }
}

let tasks = []

function createTask(name, description) {
    const task = new Task(name, description)
    tasks = [...tasks, task]
    console.log(`Tarefa ${task.name} criada com sucesso.`)
}

function filterTasks(name) {
    try{
        const filter = tasks.filter(taks => taks.name === name ) 
        console.log("\nTarefas encontradas:\n")
        filter.forEach(({ name, description, status }, index) => {
            console.log(`[${index}] Tarefa: ${name} \n${description} \nStatus: ${status ? "Concluída" : "Pendente"}`);
            console.log("-----------------------------------");
        });
    }
    catch (error) {
        console.error("Erro ao filtrar tarefas:", error)
    }
}

function listTasks() {
    tasks.forEach(({ name, description, status }, index) => {
        console.log(`[${index}] Tarefa: ${name} \n${description} \nStatus: ${status ? "Concluída" : "Pendente"}`);
        console.log("-----------------------------------");
    });
}

function finishTask(id) {
    const task = tasks[id]
    if (task) {
        task.status = true
        console.log(`\nTarefa [${tasks.findIndex(idTask => idTask === task)}]: ${task.name} -> concluída.\n`)
    } else {
        console.log(`\nTarefa ${name} não encontrada.\n`)
    }
}


// Exemplo de uso
createTask("Estudar", "Estudar JavaScript")
createTask("Fazer trabalho", "trabalho de Python")
createTask("Prova", "Prova dia 15/05")
createTask("Estudar", "Estudar C++")
createTask("Estudar", "Estudar C#")

listTasks()
finishTask(0)
filterTasks("Estudar")
