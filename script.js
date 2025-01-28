let taskIndex = null;
const formInputTask = [];

console.log(formInputTask);


function renderData() {
    const container = document.getElementById("container")
    const formData = formInputTask.map((ele, index) => {
        return (
            `
            <div class="styleinput d-flex justify-content-between">
            <div>
            ${ele.input}
            </div>
            <div class="showButton">
            <button class="btnHover" onclick="taskDone(${index})">TaskDone</button>
            <button class="btnHover" onclick="editTask(${index})">Edit</button>
            <button class="btnHover" onclick="removeTask(${index})">Remove</button>
            </div>
            </div>     
           `
        )
    })

    if (formInputTask.length === 0) {
        container.innerHTML = `<p>No Data Available</p>`
    }
    else {
        container.innerHTML = formData.join(' ');
    }

    const pendingCount = document.getElementById("pendingCount");
    pendingCount.innerHTML = formInputTask.length;
    console.log(pendingCount);


}
renderData();

function addData() {
    const taskInput = document.getElementById("todoinput");
    if (!taskInput.value.trim()) {
        return (alert("please give some input"));
    }
    formInputTask.push({
        input: taskInput.value
    });

    renderData();
    clearData();

}
function clearData() {
    const clearInput = document.getElementById("todoinput");
    clearInput.value = "";
    clearInput.focus();
}

function editTask(index) {
    const addInput = document.getElementById("todoinput");
    taskIndex = index;
    const data = formInputTask.find((ele, ind) => ind === index);
    addInput.value = data.input;
}

function removeTask(index) {
    formInputTask.splice(index, 1);
    renderData();
}
function updateData() {
    const input = document.getElementById("todoinput");
    formInputTask.splice(taskIndex, 1, { input: input.value });
    console.log(formInputTask)
    console.log(input.value);
    renderData();
    clearData();
}
function clearAllData() {
    formInputTask.length = 0;
    renderData();
}
function taskDone(index) {

}







