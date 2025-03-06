
  // body bacground color
  const backgroundColorImg = document.getElementById("background-color");


const colors = [ "#ffebcd", "#f0f8ff", "#faebd7", "#ffcccb", "#e6e6fa"]; // You can add more 
let colorIndex = 0;


backgroundColorImg.addEventListener("click", function () {
    
    document.body.style.backgroundColor = colors[colorIndex];
    
    colorIndex = (colorIndex + 1) % colors.length; 
});

// display current date

function updateDate() {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById("date").textContent = formattedDate.replace(",", "");
}
updateDate()


document.addEventListener("DOMContentLoaded", function () {
    const completeButtons = document.querySelectorAll(".complete-btn");
    const taskAssigned = document.getElementById("task-assigned");
    const checkboxCount = document.getElementById("checkbox-count");
    const historySection = document.getElementById("history");
    const clearHistoryBtn = document.getElementById("clear-hitory");

    let remainingTasks = parseInt(taskAssigned.textContent);
    let completedTasks = parseInt(checkboxCount.textContent);
    let completedButtonCount = 0;

    // Using a for loop instead of forEach
    for (let i = 0; i < completeButtons.length; i++) {
        const button = completeButtons[i];
        button.addEventListener("click", function () {
            if (button.disabled) return; 

            // Disable the button 
            button.disabled = true;
            button.classList.add("opacity-50", "cursor-not-allowed");

            //  Task Assigned count
            remainingTasks--;
            taskAssigned.textContent = remainingTasks;

            //  tasks checkbox  navbar
            completedTasks++;
            checkboxCount.textContent = completedTasks;

            //  history button
            const taskTitle = button.closest(".bg-blue-50").querySelector("h1").textContent;
            const currentTime = new Date().toLocaleTimeString();
            const historyItem = document.createElement("p");
            historyItem.classList.add("bg-blue-50", "p-6","text-xs", "rounded-lg", "mt-7");
            historyItem.textContent = `You have completed the task  ${taskTitle} - Completed at ${currentTime}`;
            historySection.appendChild(historyItem);

            // windows Alert  successful
            alert("Board update successful!");

            //  completed button 
            completedButtonCount++;

            //  all tasks are completed alert, 
            if (completedButtonCount === completeButtons.length) {
                setTimeout(() => {
                    alert("All tasks completed successfully!");
                }, 200);
            }
        });
    }

    // Clear History button 
    clearHistoryBtn.addEventListener("click", function () {
        historySection.innerHTML = "";
        taskAssigned.textContent = completeButtons.length;
        checkboxCount.textContent = "23"; 
        remainingTasks = completeButtons.length;
        completedTasks = 23;

        // Reset all button 
        for (let i = 0; i < completeButtons.length; i++) {
            const button = completeButtons[i];
            button.disabled = false;
            button.classList.remove("opacity-50", "cursor-not-allowed");
        }

        // Reset completed button 
        completedButtonCount = 0;



        

          
   
    });
});

// run the next page

const runNextPageDiv = document.getElementById("run-next-page");

runNextPageDiv.addEventListener("click", function () {

 window.location.href = "main.html"; 


});


//  return to home page
function backPage() {
    window.location.href = "index.html";
    alert
}

 