const taskBtn = document.getElementById("taskBtn")
const previousData = document.querySelector(".data")
const tasksBox = document.getElementById("tasksBox")


taskBtn.onclick = () =>{
    const taskName = document.getElementById("taskName").value
    const taskDescription = document.getElementById("taskDescription").value
    const taskDate = document.getElementById("taskDate").value
    previousData.classList.add("hide")
    let newTask = document.createElement("div")
    newTask.innerHTML = `
    <div class="new-task">
        <div class="insideBox">
            <div class="tick-box" id="tick"></div>
            <div class="taskContent">
                <h3 class="newTaskName">${taskName}</h3>
                <p class="newTaskDescription">${taskDescription}</p>
                <p class="newTaskDate">${taskDate}</p>
            </div>
        </div>
    </div>
    `
    tasksBox.appendChild(newTask)

    const taskCompleted = document.querySelectorAll("#tick")
    const newTaskName = document.querySelectorAll(".newTaskName")
    const newTaskDescription = document.querySelectorAll(".newTaskDescription")
    const newTaskDate = document.querySelectorAll(".newTaskDate")
    const taskContent = document.querySelectorAll(".taskContent")
    taskCompleted.forEach((value,index) => {
        value.onclick = () => {
            taskCompleted[index].innerHTML = "✓"
            taskCompleted[index].style.backgroundColor = "#0174fe"
            newTaskName[index].style.textDecoration = "line-through"
            newTaskDescription[index].style.textDecoration = "line-through"
            newTaskDate[index].style.textDecoration = "line-through"
            taskContent[index].style.backgroundColor = "#ffdca4"
        }
    })
    console.log(taskCompleted)
}