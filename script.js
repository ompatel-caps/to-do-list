document.addEventListener("DOMContentLoaded", function () {

    let enter = prompt("Enter your  ToDo");
    let entertodo = document.getElementById("entertodo");
    
    let newTodo = document.createElement("p");
    newTodo.textContent = enter;
    entertodo.appendChild(newTodo);
    
    // entertodo.textcontent = `${enter}`
    // entertodo.appendChild(enter)


let addtask = document.getElementById("addTaskButton")
let adddate = document.getElementById("adddateButton")

adddate.addEventListener("click", (Event) => {
    // let taskTime = document.getElementById("taskTime").value;
    let taskDate = document.getElementById("taskDate").value;
    let newdates = document.getElementById("newdates")

    


    const newdate = document.createElement("h2")
    newdate.textContent =  ` Date: ${taskDate} `
    newdates.appendChild(newdate)

})


addtask.addEventListener("click", function(event)   {
    // function()


{
    let taskInput = document.getElementById("taskInput").value;
    let tasklist = document.getElementById("taskList")
    // console.log(newdates);



    const newlist = document.createElement("li")

    const deleteb = document.createElement("button")
    deleteb.textContent = "Delete"
    deleteb.id = "deleteTask"
    
    newlist.textContent = `${taskInput} `;

    newlist.appendChild(deleteb)

    
    tasklist.appendChild(newlist)

    const button = document.createElement("button")
    // checkbox.addEventListener("click", (event) =>  {
    // if(event){
    //     button.textContent = `completed`
    // }
    // else{
    //     button.textContent = "undo"
    // }
    // } )

    deleteb.addEventListener("click", (event)=>{
        event.target.parentNode.remove  ()
    })

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newlist.prepend(checkbox); // Insert checkbox before the task text

    checkbox.addEventListener("click", (event) => {
        if (event.target.checked) {
            newlist.style.textDecoration = "line-through"; // Mark task as completed
        } else {
            newlist.style.textDecoration = "none"; // Undo completion
        }
    });


document.getElementById("taskInput").value = '';
document.getElementById("taskTime").value = '';
document.getElementById("taskDate").value = '';
}

});

});


