const taskBtn = document.getElementById("taskBtn")
const previousData = document.querySelector(".data")
const tasksBox = document.getElementById("tasksBox")

const addAudio = new Audio("https://cdn.pixabay.com/download/audio/2022/10/30/audio_6634b0add4.mp3?filename=click-124467.mp3")
const taskCompletedAudio = new Audio("https://cdn.pixabay.com/download/audio/2023/02/28/audio_52ccaf1a85.mp3?filename=click-button-140881.mp3")

taskBtn.onclick = () =>{
    addAudio.pause()
    addAudio.currentTime = 0
    addAudio.play()
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
    console.log(taskCompleted)
}
