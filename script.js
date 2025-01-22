const formInputTask = [];

console.log(formInputTask)

function renderData() {
    const container = document.getElementById("container")
    const formData = formInputTask.map((ele, index) => {
        return (
            `
            <div class="styleinput d-flex justify-content-between">
            <div>
            ${ele.input}
            </div>
            <div class="btnHover">
            <button class="btnHover" onclick="taskDone()">TaskDone</button>
            <button class="btnHover" onclick="editTask(${index})">Edit</button>
            <button class="btnHover" onclick="removeTask()">Remove</button>
            </div>
            </div>
                
           `
        )
    })
    container.innerHTML = formData.join(' ');
    const pendingCount = document.getElementById("pendingCount");
    pendingCount.innerHTML = formInputTask.length;
    console.log(pendingCount);

}
renderData();


function addData() {
    const taskInput = document.getElementById("todoinput");
    formInputTask.push({
        input: taskInput.value
    });
    renderData();
    clearData();

}
function clearData() {
    const clearInput = document.getElementById("todoinput");
    clearInput.value = " ";
    clearInput.focus();
}

function editTask(index){
    const addInput = document.getElementById("todoinput");
    const data = formInputTask.find((ele,ind) => ind === index);
    addInput.value = data.input;
}



