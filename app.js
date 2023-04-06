const taskBtn = document.getElementById("taskBtn")
const previousData = document.querySelector(".data")
const tasksBox = document.getElementById("tasksBox")

const addAudio = new Audio("https://cdn.pixabay.com/download/audio/2022/10/30/audio_6634b0add4.mp3?filename=click-124467.mp3")
const taskCompletedAudio = new Audio("https://cdn.pixabay.com/download/audio/2023/02/28/audio_52ccaf1a85.mp3?filename=click-button-140881.mp3")

document.getElementById("taskDate").addEventListener('focus', () => {
  taskDate.click()
})

taskBtn.onclick = () =>{
    const taskName = document.getElementById("taskName")
    const taskDescription = document.getElementById("taskDescription")
    const taskDate = document.getElementById("taskDate")
    taskDate.type='text'

    if(taskName.value == ""){
        taskName.placeholder = "Fill Task Name!!"
        setTimeout(()=>{
            taskName.placeholder = "Task Name"
        },1500)
    }

    if(taskDescription.value == ""){
        taskDescription.placeholder = "Fill Task Description!!"
        setTimeout(()=>{
            taskDescription.placeholder = "Task Desciption"
        },1500)
    }

    if(taskDate.value == ""){
        taskDate.placeholder = "Fill Task Date!!"
        setTimeout(()=>{
            taskDate.placeholder = "Due date and time"
        },1500)
    }
    else{
        addAudio.pause()
    addAudio.currentTime = 0
    addAudio.play()
    let newDate = new Date(taskDate.value)
    const taskDateString = newDate.toLocaleString()
    previousData.classList.add("hide")
    let newTask = document.createElement("div")
    newTask.innerHTML = `
    <div class="new-task">
        <div class="insideBox">
            <div class="tick-box" id="tick"></div>
            <div class="taskContent">
                <h3 class="newTaskName">${taskName.value}</h3>
                <p class="newTaskDescription">${taskDescription.value}</p>
                <p class="newTaskDate">${taskDateString}</p>
            </div>
        </div>
    </div>
    `
    tasksBox.appendChild(newTask)
    taskName.value = ""
    taskDescription.value = ""
    taskDate.value = ""
    
    const taskCompleted = document.querySelectorAll("#tick")
    const newTaskName = document.querySelectorAll(".newTaskName")
    const newTaskDescription = document.querySelectorAll(".newTaskDescription")
    const newTaskDate = document.querySelectorAll(".newTaskDate")
    const taskContent = document.querySelectorAll(".taskContent")
    taskCompleted.forEach((value,index) => {
        value.onclick = () => {
            taskCompletedAudio.pause()
            taskCompletedAudio.currentTime = 0
            taskCompletedAudio.play()
            taskCompleted[index].innerHTML = "✓"
            taskCompleted[index].style.backgroundColor = "#0174fe"
            newTaskName[index].style.textDecoration = "line-through"
            newTaskDescription[index].style.textDecoration = "line-through"
            newTaskDate[index].style.textDecoration = "line-through"
            taskContent[index].style.backgroundColor = "#ffdca4"
        }
    })
    }
}
