const addList = document.getElementById("addList");
const popup = document.querySelector(".popup-wrap");
addList.addEventListener("click", () => {
  const popupbox = document.createElement("div");
  const popHeading = document.createElement("p");
  const popInput = document.createElement("input");
  const addBtn = document.createElement("div");
  const closeBtn = document.createElement("div");
  document.querySelector(".container").classList.add("blur");
  popup.appendChild(popupbox);
  popupbox.className = "popup-box";
  popHeading.innerText = "Add new List";
  popInput.type = "text";
  popInput.placeholder = "Add new list here";
  addBtn.className = "popup-box-button";
  closeBtn.className = "popup-box-button";
  addBtn.innerText = "Add";
  const warning=document.createElement("p");
  warning.innerText="Enter valid list name!!!";
  warning.style.display="none";
  closeBtn.innerText = "Close";
  popupbox.appendChild(popHeading);
  popupbox.appendChild(popInput);
  popupbox.appendChild(addBtn);
  popupbox.appendChild(closeBtn);
  popupbox.appendChild(warning);
  addBtn.addEventListener("click", () => {
    if (popInput.value=== "") {
        warning.style.fontSize="0.7rem"
        warning.style.display="block";
    }
    else{
      document.getElementById("intro-text").style.display="none";
      const box = document.createElement("div");
      const boxHeading = document.createElement("a");
      const add = document.createElement("i");
      const deleteBtn = document.createElement("i");
      const btnContainer = document.createElement("div");
      btnContainer.className = "button-container";
      add.className = "fa-solid fa-circle-plus";
      deleteBtn.className = "fa-solid fa-trash-can";
      boxHeading.id="box-heading";
      box.className = "box";
      boxHeading.setAttribute("href", "index2.html");
      document.querySelector(".container-2").appendChild(box);
      box.appendChild(boxHeading);
      box.appendChild(btnContainer);
      btnContainer.appendChild(add);
      btnContainer.appendChild(deleteBtn);
      boxHeading.innerText = popInput.value;
      boxHeading.style.borderBottom = "1px solid black";
      popup.removeChild(popupbox);
      document.querySelector(".container").classList.remove("blur");
      deleteBtn.addEventListener("click", () => {
        document.querySelector(".container-2").removeChild(box);
        if(document.querySelector(".container-2").innerText===""){
          document.querySelector("#intro-text").style.display="block";
        }
      });
      add.addEventListener("click", () => {
        const popupbox = document.createElement("div");
        const popHeading = document.createElement("p");
        const popInput = document.createElement("input");
        const addBtn = document.createElement("div");
        const closeBtn = document.createElement("div");
        popup.appendChild(popupbox);
        popupbox.className = "popup-box";
        popHeading.innerText = "Add new item";
        popInput.type = "text";
        popInput.placeholder = "Add new item here";
        addBtn.className = "popup-box-button";
        closeBtn.className = "popup-box-button";
        addBtn.innerText = "Add";
        closeBtn.innerText = "Close";
        document.querySelector(".container").classList.add("blur");
        popupbox.appendChild(popHeading);
        popupbox.appendChild(popInput);
        popupbox.appendChild(addBtn);
        popupbox.appendChild(closeBtn);
        addBtn.addEventListener("click", () => {
          if (popInput.value !== "") {
            const task = document.createElement("div");
            const taskText = document.createElement("span");
            const doneButton = document.createElement("button");
            taskText.className = "task-text";
            doneButton.className = "done-button";
            task.className = "task";
            taskText.innerText = popInput.value;
            doneButton.innerText = "mark done";
            document.querySelector(".container").classList.remove("blur");
            box.appendChild(task);
            task.appendChild(taskText);
            task.appendChild(doneButton);
            popup.removeChild(popupbox);
            doneButton.addEventListener("click", () => {
              taskText.style.textDecoration = "line-through";
              task.removeChild(doneButton);
            });
          }
        });
        closeBtn.addEventListener("click", () => {
          popup.removeChild(popupbox);
          document.querySelector(".container").classList.remove("blur");
        });
      });
    }
  });
  closeBtn.addEventListener("click", () => {
    popup.removeChild(popupbox);
    document.querySelector(".container").classList.remove("blur");
  });
});


