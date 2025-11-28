const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", e => {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const text = input.value.trim();
    if (text === "") return alert("Please enter a task!");

    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span class="task-text">${text}</span>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    `;

    taskList.appendChild(li);
    input.value = "";

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.style.animation = "fadeOut 0.4s ease forwards";
        setTimeout(() => li.remove(), 350);
    });

    li.querySelector(".checkbox").addEventListener("change", function () {
        if (this.checked) {
            li.style.opacity = "0.5";
            li.querySelector(".task-text").style.textDecoration = "line-through";
        } else {
            li.style.opacity = "1";
            li.querySelector(".task-text").style.textDecoration = "none";
        }
    });
}
