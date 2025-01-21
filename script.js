const formInputTask = [];
function renderData() {
    const container = document.getElementById("container")
    const formData = formInputTask.map((ele) => {
        return (
            `
            <div>${ele.input}</div>
                
           `
        )
    })
    container.innerHTML = formData.join(' ');
}
renderData();

function addData() {
    const taskInput = document.getElementById("todoinput"); 
    formInputTask.push({
        input : taskInput.value
    });  
    renderData();
    clearData();
}
function clearData(){
    const clearInput = document.getElementById("todoinput");
    clearInput.value = " ";
    clearInput.focus();
}
const pendingTask = 0;
const completedCount =0;



