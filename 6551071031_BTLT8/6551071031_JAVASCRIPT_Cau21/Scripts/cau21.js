document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
    let input = document.getElementById("new-task");
    let taskText = input.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(delBtn);
    document.getElementById("task-list").appendChild(li);

    input.value = "";
}
