
   let colors = [
    "lightblue",   
    "lightorange",   
    "lightgreen", 
    "lightamber",  
    "lightgoldenrodyellow",
    "lavender"
];

let clickCount = 0;

//  default background color 
document.body.style.backgroundColor = colors[0];

document.getElementById("background-color").addEventListener("click", function() {
    clickCount++;
    // Change the background color 
    document.body.style.backgroundColor = colors[clickCount % colors.length];
});

